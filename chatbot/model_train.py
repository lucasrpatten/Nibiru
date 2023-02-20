import json
import numpy as np
import tensorflow as tf
import tensorflowjs as tfjs
import tensorflow_text as text
from sklearn.model_selection import train_test_split

# Load the data
with open('intents.json') as file:
    data = json.load(file)

# Create lists for the input data and labels
input_data = []
labels = []
label_encoder = {}
for intent in data['intents']:
    for pattern in intent['patterns']:
        input_data.append(pattern)
        label = intent['tag']
        if label not in label_encoder:
            label_encoder[label] = len(label_encoder)
        labels.append(label_encoder[label])

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(input_data, labels, test_size=0.2, random_state=42)

# Create a vocabulary
VOCAB_SIZE = 10000
encoder = text.WhitespaceTokenizer()
vocab = tf.keras.layers.experimental.preprocessing.TextVectorization(
    max_tokens=VOCAB_SIZE, standardize="lower_and_strip_punctuation"
)
vocab.adapt(X_train)

# Convert the data to sequences of integers
X_train = vocab(X_train)
X_test = vocab(X_test)

# Create the model
model = tf.keras.Sequential([
    tf.keras.layers.Embedding(VOCAB_SIZE + 1, 64),
    tf.keras.layers.Bidirectional(tf.keras.layers.LSTM(64)),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dropout(0.5),
    tf.keras.layers.Dense(len(label_encoder), activation='softmax')
])

# Compile the model
model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

# Train the model
model.fit(X_train, tf.keras.utils.to_categorical(y_train), epochs=80, batch_size=5,
          validation_data=(X_test, tf.keras.utils.to_categorical(y_test)))

# Save the model and vocab
config = vocab.get_config()

config = config["vocabulary"] = vocab.get_vocabulary()
with open('./vocab_config.json', 'w') as f:
    json.dump(config, f)
with open('tags.json', 'w') as file:
    json.dump(list(set(labels)), file)

# Save the model
model.save('chatbot_model.h5')

# Save the model in TensorFlow.js format
tfjs.converters.save_keras_model(model, 'chatbot_model_js')