import json
import random

import contractions
import nltk
import numpy as np
import tensorflow as tf
import tensorflowjs as tfjs
from nltk.stem import WordNetLemmatizer, PorterStemmer
from tensorflow import keras

nltk.download('punkt')
nltk.download('wordnet')

# Load the data
with open('trainingdata.json') as file:
    data = json.load(file)

# Extract the patterns and tags from the data
tags = []
patterns = []
for intent in data['intents']:
    tags.append(intent['tag'])
    for pattern in intent['patterns']:
        patterns.append(pattern)

# Tokenize, lemmatize and stem the patterns
lemmatizer = WordNetLemmatizer()
stemmer = PorterStemmer()
words = []
for pattern in patterns:
    pattern = contractions.fix(pattern)
    tokens = nltk.word_tokenize(pattern)
    tokens = [lemmatizer.lemmatize(word.lower()) for word in tokens]
    tokens = [stemmer.stem(word) for word in tokens]
    words.extend(tokens)

# Create a dictionary of words
vocab = sorted(set(words))

# write the tags to a file
with open('tags.json', 'w') as file:
    json.dump(tags, file)

# write the vocab to a file
with open('vocab.json', 'w') as file:
    json.dump(vocab, file)

# Create training data
X_train = []
y_train = []
for intent in data['intents']:
    for pattern in intent['patterns']:
        pattern = contractions.fix(pattern)
        tokens = nltk.word_tokenize(pattern)
        tokens = [lemmatizer.lemmatize(word.lower()) for word in tokens]
        tokens = [stemmer.stem(word) for word in tokens]
        X_train.append([int(word in tokens) for word in vocab])
        y_train.append(tags.index(intent['tag']))

# Define the model
model = keras.Sequential([
    keras.layers.Dense(8, input_dim=len(vocab), activation='relu'),
    keras.layers.Dense(8, activation='relu'),
    keras.layers.Dense(len(tags), activation='softmax')
])

# Compile the model
model.compile(loss='sparse_categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

# Train the model
history = model.fit(np.array(X_train), np.array(y_train), epochs=100, batch_size=8, verbose=1)

# Save the model
model.save('chatbot_model.h5')

# Convert the model to Tensorflow.js format
tfjs.converters.save_keras_model(model, 'chatbot_model_js')
