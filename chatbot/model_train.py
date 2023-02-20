import json
import numpy as np
import tensorflow as tf
import tensorflowjs as tfjs
import tensorflow_text as text
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
from datetime import datetime
import threading
import time


# Load the data
with open('intents.json') as file:
    data = json.load(file)

# Create lists for the input data and labels
input_data = []
labels = []
tags = []
label_encoder = {}
for intent in data['intents']:
    for pattern in intent['patterns']:
        input_data.append(pattern)
        label = intent['tag']
        tags.append(label)
        if label not in label_encoder:
            label_encoder[label] = len(label_encoder)
        labels.append(label_encoder[label])

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(input_data, labels, test_size=0.15)  # random_state=42)

# Create a vocabulary
VOCAB_SIZE = 10000
encoder = text.WhitespaceTokenizer()
max_len = max(len(seq) for seq in X_train + X_test)

vocab = tf.keras.layers.experimental.preprocessing.TextVectorization(
    max_tokens=VOCAB_SIZE, output_sequence_length=max_len, standardize="lower_and_strip_punctuation"
)
vocab.adapt(X_train)

# Convert the data to sequences of integers
X_train = vocab(X_train)
X_test = vocab(X_test)

# Load the GloVe word embeddings
embeddings_index = {}
with open('./glove_embeddings/glove.6B.100d.txt') as file:
    for line in file:
        word, coefs = line.split(maxsplit=1)
        coefs = np.fromstring(coefs, 'f', sep=' ')
        embeddings_index[word] = coefs

# Prepare the embedding matrix
word_index = dict(zip(vocab.get_vocabulary(), range(VOCAB_SIZE)))
embedding_matrix = np.zeros((VOCAB_SIZE, 100))
for word, i in word_index.items():
    if i < VOCAB_SIZE:
        embedding_vector = embeddings_index.get(word)
        if embedding_vector is not None:
            embedding_matrix[i] = embedding_vector

# Define the model
max_len = X_train.shape[1]
model = tf.keras.Sequential([
    tf.keras.layers.Embedding(VOCAB_SIZE, 100, input_length=max_len,
                              weights=[embedding_matrix], trainable=False),
    tf.keras.layers.Bidirectional(tf.keras.layers.LSTM(64)),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dropout(0.5),
    tf.keras.layers.Dense(len(label_encoder), activation='softmax')
])

# Compile the model
model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

# Define the log directory for TensorBoard
log_dir = "./logs/fit/" + datetime.now().strftime("%Y%m%d-%H%M%S")
tensorboard_callback = tf.keras.callbacks.TensorBoard(log_dir=log_dir, histogram_freq=1)

# Train the model
history = model.fit(X_train, tf.keras.utils.to_categorical(y_train), epochs=70, batch_size=5,
                    validation_data=(X_test, tf.keras.utils.to_categorical(y_test)),
                    callbacks=[tensorboard_callback])

# Save the model and vocab
config = vocab.get_config()
config["vocabulary"] = vocab.get_vocabulary()
with open('./vocab_config.json', 'w') as f:
    json.dump(config, f)
with open('tags.json', 'w') as file:
    json.dump(list(set(tags)), file)

# Save the model
model.save('chatbot_model.h5')

# Save the model in TensorFlow.js format
tfjs.converters.save_keras_model(model, 'chatbot_model_js')

# view = input("Would you like to view the graphs in matplotlib? (y/n): ")
# if view.lower() in ["y", "yes"]:
#     # Create a 2x1 subplot layout
#     fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(8, 8))

#     # Plot the training and validation loss over the epochs in the first subplot
#     ax1.plot(history.history['loss'], label='Training Loss')
#     ax1.plot(history.history['val_loss'], label='Validation Loss')
#     ax1.set_title('Model Loss')
#     ax1.set_xlabel('Epoch')
#     ax1.set_ylabel('Loss')
#     ax1.legend()

#     # Plot the training and validation accuracy over the epochs in the second subplot
#     ax2.plot(history.history['accuracy'], label='Training Accuracy')
#     ax2.plot(history.history['val_accuracy'], label='Validation Accuracy')
#     ax2.set_title('Model Accuracy')
#     ax2.set_xlabel('Epoch')
#     ax2.set_ylabel('Accuracy')
#     ax2.legend()

#     # Show the plot
#     plt.show()
