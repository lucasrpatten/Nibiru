import json
import random

import nltk
import numpy as np
import tensorflow as tf
import tensorflowjs as tfjs
from nltk.stem import WordNetLemmatizer
from tensorflow import keras

# Download required NLTK data
nltk.download('punkt')
nltk.download('wordnet')

# Load the model, tags, and vocab
model = tfjs.converters.load_keras_model('./chatbot_model_js/model.json')
with open('tags.json') as file:
    tags = json.load(file)
with open('vocab.json') as file:
    vocab = json.load(file)
with open('responsedata.json') as file:
    data = json.load(file)

# Create lemmatizer, stemmer, and tokenizer
lemmatizer = WordNetLemmatizer()
stemmer = nltk.PorterStemmer()
tokenizer = nltk.WordPunctTokenizer()

# Create function to process user input
def process_input(input_text):
    # Tokenize and lemmatize the input
    tokens = tokenizer.tokenize(input_text)
    tokens = [lemmatizer.lemmatize(token.lower()) for token in tokens]
    tokens = [stemmer.stem(token) for token in tokens]

    # Create input vector from processed input
    input_vector = [int(word in tokens) for word in vocab]

    return input_vector

# Define function to generate chatbot response
def generate_response(input_text):
    # Process the input
    input_vector = process_input(input_text)

    # Get predicted probabilities for each tag
    results = model.predict(np.array([input_vector]))
    results = np.squeeze(results)

    # Choose the tag with the highest probability
    tag_index = np.argmax(results)
    tag = tags[tag_index]

    # Choose a random response from the tag's list of responses
    responses = []
    for intent in data['intents']:
        if intent['tag'] == tag:
            responses = intent['responses']
    response = random.choice(responses)

    return response

# Run the chatbot
while True:
    # Get user input
    input_text = input("You: ")

    # Generate chatbot response
    response = generate_response(input_text)

    # Print response
    print("Bot: " + response)
