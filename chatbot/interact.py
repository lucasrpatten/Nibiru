import json
import nltk
import numpy as np
import tensorflow as tf
from nltk.stem import WordNetLemmatizer, PorterStemmer
from tensorflow import keras

# Download necessary nltk data
nltk.download('punkt')
nltk.download('wordnet')

# Load the trained model
model = keras.models.load_model('chatbot_model.h5')

# Load the vocabulary and tags
with open('vocab.json') as file:
    vocab = json.load(file)

with open('tags.json') as file:
    tags = json.load(file)

# Create lemmatizer and stemmer objects
lemmatizer = WordNetLemmatizer()
stemmer = PorterStemmer()

# Define a function to process user input
def process_input(input_text):
    # Tokenize the input text
    tokens = nltk.word_tokenize(input_text)
    # Stem and lemmatize each token
    processed_tokens = []
    for token in tokens:
        processed_token = stemmer.stem(lemmatizer.lemmatize(token.lower()))
        processed_tokens.append(processed_token)
    # Create a bag of words from the processed tokens
    bag_of_words = [int(token in processed_tokens) for token in vocab]
    return np.array(bag_of_words).reshape(1, -1)

# Define a function to generate a response
def generate_response(input_text):
    # Process the user input
    processed_input = process_input(input_text)
    # Make a prediction using the trained model
    prediction = model.predict(processed_input)
    # Find the tag with the highest probability
    max_prob_index = np.argmax(prediction)
    tag = tags[max_prob_index]
    # If the probability is below a certain threshold, return a default response
    if prediction[0][max_prob_index] < 0.5:
        return "I'm sorry, I didn't understand. Can you please rephrase your question?"
    # Select a random response from the intent with the highest probability
    for intent in data['intents']:
        if intent['tag'] == tag:
            response = random.choice(intent['responses'])
            break
    return response

# Allow the user to interact with the chatbot
print("Welcome to the chatbot! Type 'quit' to exit.")
while True:
    input_text = input("You: ")
    if input_text.lower() == 'quit':
        break
    response = generate_response(input_text)
    print("Bot:", response)
