import json
import math
import nltk
import numpy as np
import tensorflow as tf
import tensorflowjs as tfjs
from keras.preprocessing.text import Tokenizer
from sklearn.model_selection import train_test_split
from datetime import datetime


from nltk.stem import WordNetLemmatizer

def load_data():
    #install nltk wordnet
    nltk.download('wordnet')

    with open('intents.json') as f:
        data = json.load(f)

    input_data = []
    labels = []
    tags = []
    label_encoder = {}
    lem = WordNetLemmatizer()

    for intent in data['intents']:
        for pattern in intent['patterns']:
            pattern = pattern.lower()  # Convert to lowercase
            words = nltk.word_tokenize(pattern)  # Tokenize the pattern into words
            words = [lem.lemmatize(word) for word in words]  # Lemmatize the words
            input_data.append(" ".join(words))  # Join the words back into a string
            label = intent['tag']
            tags.append(label)
            if label not in label_encoder:
                label_encoder[label] = len(label_encoder)
            labels.append(label_encoder[label])

    num_labels = len(set(labels))  # Get the number of unique labels

    return input_data, labels, num_labels, label_encoder


def split_data(input_data, labels, test_size=0.1, random_state=42):
    unique_labels = np.unique(labels)
    train_indices = []
    test_indices = []
    for label in unique_labels:
        idx = np.where(labels == label)[0]
        np.random.seed(random_state)
        np.random.shuffle(idx)
        split_point = math.ceil(idx.shape[0] * test_size)
        test_idx = idx[:split_point] # take one sample for test
        train_idx = idx[split_point:] # rest for train
        test_indices.extend(test_idx)
        train_indices.extend(train_idx)
    x_train = [input_data[i] for i in train_indices]
    x_test = [input_data[i] for i in test_indices]
    y_train = [labels[i] for i in train_indices]
    y_test = [labels[i] for i in test_indices]
    return x_train, x_test, y_train, y_test



def convert_to_sequences(x_train, x_test, embeddings_index):
    tokenizer = Tokenizer()
    tokenizer.fit_on_texts(x_train)
    x_train = tokenizer.texts_to_sequences(x_train)
    x_test = tokenizer.texts_to_sequences(x_test)

    word_index = tokenizer.word_index
    embedding_matrix = prepare_embedding_matrix(len(word_index) + 1, 100, embeddings_index, word_index)

    x_train = tf.keras.preprocessing.sequence.pad_sequences(x_train, padding='post', maxlen=20)
    x_test = tf.keras.preprocessing.sequence.pad_sequences(x_test, padding='post', maxlen=20)

    with open('tokenizer.json', 'w') as f:
        json.dump(tokenizer.to_json(), f)

    return x_train, x_test, embedding_matrix


def load_embeddings():
    embeddings_index = {}
    with open('./glove_embeddings/glove.6B.100d.txt') as file:
        for line in file:
            word, coefs = line.split(maxsplit=1)
            coefs = np.fromstring(coefs, 'f', sep=' ')
            embeddings_index[word] = coefs
    return embeddings_index


def prepare_embedding_matrix(VOCAB_SIZE, embedding_dim, embeddings_index, word_index):
    embedding_matrix = np.zeros((VOCAB_SIZE, embedding_dim))
    for word, i in word_index.items():
        if i < VOCAB_SIZE:
            embedding_vector = embeddings_index.get(word)
            if embedding_vector is not None:
                embedding_matrix[i] = embedding_vector
    return embedding_matrix


def define_model(VOCAB_SIZE, max_len, embedding_dim, embedding_matrix, num_labels):
    model = tf.keras.Sequential([
        tf.keras.layers.Embedding(VOCAB_SIZE, embedding_dim, input_length=max_len,
                                  weights=[embedding_matrix], trainable=False),
        tf.keras.layers.Conv1D(filters=32, kernel_size=3, activation='relu', padding='same'),
        tf.keras.layers.MaxPooling1D(pool_size=2),
        tf.keras.layers.Dense(128, activation='relu'),
        tf.keras.layers.Bidirectional(tf.keras.layers.LSTM(64)),
        # tf.keras.layers.Dropout(0.2),
        tf.keras.layers.Dense(num_labels, activation='softmax')
    ])
    return model


def train_model(model, x_train, y_train, x_test, y_test, epochs=50, batch_size=3):
    model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

    log_dir = f"./logs/fit/" + datetime.now().strftime("%Y%m%d-%H%M%S")
    tensorboard_callback = tf.keras.callbacks.TensorBoard(log_dir=log_dir, histogram_freq=1)

    early_stop = tf.keras.callbacks.EarlyStopping(monitor='val_loss', patience=15)

    history = model.fit(x_train, tf.keras.utils.to_categorical(y_train), epochs=epochs, batch_size=batch_size,
                        validation_data=(x_test, tf.keras.utils.to_categorical(y_test)),
                        callbacks=[tensorboard_callback, early_stop])

    return history



def save_model(model, vocab, tags, model_name="chatbot"):
    # Save the vocabulary
    config = vocab.get_config()
    with open('./vocab_config.json', 'w') as f:
        json.dump(config, f)
    with open('tags.json', 'w') as file:
        json.dump(tags, file)

    # Save the model
    model.save(f'{model_name}.h5')

    # Save the model in TensorFlow.js format
    tfjs.converters.save_keras_model(model, f'{model_name}_js')

def main():
    # Load and split data
    input_data, labels, num_labels, label_encoder = load_data()
    x_train, x_test, y_train, y_test = split_data(input_data, labels)

    # Load embeddings
    embeddings_index = load_embeddings()

    # Convert data to sequences and prepare embedding matrix
    x_train, x_test, embedding_matrix = convert_to_sequences(x_train, x_test, embeddings_index)

    # Define and compile model
    VOCAB_SIZE = len(embedding_matrix)
    max_len = x_train.shape[1]
    EMBEDDING_DIMENSIONS = 100
    model = define_model(VOCAB_SIZE, max_len, EMBEDDING_DIMENSIONS, embedding_matrix, num_labels)
    train_model(model, x_train, y_train, x_test, y_test)

    # Save model and vocabulary
    vocab = Tokenizer()
    vocab.fit_on_texts(input_data)
    save_model(model, vocab, [k for k in label_encoder])

if __name__ == '__main__':
    main()