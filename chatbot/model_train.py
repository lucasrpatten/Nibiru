import json
import random

import nltk
import numpy as np
import tensorflow as tf
import tensorflowjs as tfjs
from nltk.corpus import stopwords, wordnet
from nltk.stem import WordNetLemmatizer, PorterStemmer
from nltk.tokenize import word_tokenize
from contractions import fix

# Download required NLTK data
nltk.download('punkt')
nltk.download('wordnet')
nltk.download('stopwords')

# Load the data file
with open('trainingdata.json') as file:
    data = json.load(file)

# Create lists for training data
words = []
tags = []
docs = []

# Loop through each sentence in the data file
for intent in data['intents']:
    for pattern in intent['patterns']:
        # Tokenize the words in the pattern
        words_list = word_tokenize(fix(pattern))

        # Remove stop words and punctuation
        words_list = [word.lower() for word in words_list if word.lower()
                      not in stopwords.words('english') and word.isalpha()]

        # Lemmatize the words
        words_list = [WordNetLemmatizer().lemmatize(word) for word in words_list]

        # Stem the words
        stemmed_words_list = [PorterStemmer().stem(word) for word in words_list]

        # Add words to the words list
        words.extend(words_list)
        words.extend(stemmed_words_list)

        # Add the pattern and tag to the docs list
        docs.append((words_list, intent['tag']))

        # Add the tag to the tags list
        if intent['tag'] not in tags:
            tags.append(intent['tag'])

# Sort the lists and remove duplicates
words = sorted(list(set(words)))
tags = sorted(list(set(tags)))

# Create training data
training_data = []
output_empty = [0] * len(tags)
for doc in docs:
    # Create bag of words for each pattern
    bag = [int(word in doc[0]) for word in words]

    # Create output row for each tag
    output_row = list(output_empty)
    output_row[tags.index(doc[1])] = 1

    # Add the bag and output row to the training data
    training_data.append([bag, output_row])

# Shuffle the training data
random.shuffle(training_data)

# Split the training data into input and output
X = np.array([i[0] for i in training_data])
y = np.array([i[1] for i in training_data])

# Create the model
model = tf.keras.Sequential([
    tf.keras.layers.Dense(16, input_shape=(len(X[0]),), activation='relu'),
    tf.keras.layers.Dense(8, activation='relu'),
    tf.keras.layers.Dense(len(y[0]), activation='softmax')
])
model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

# Train the model
model.fit(X, y, epochs=100, batch_size=8, verbose=1)

# Save the model
tfjs.converters.save_keras_model(model, 'chatbot_model_js')
with open('tags.json', 'w') as file:
    json.dump(tags, file)
with open('vocab.json', 'w') as file:
    json.dump(words, file)

# Save the model
model.save('chatbot_model.h5')

# Convert the model to Tensorflow.js format
tfjs.converters.save_keras_model(model, 'chatbot_model_js')
