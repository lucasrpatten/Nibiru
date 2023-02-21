import json
import random

import nltk
import numpy as np
import tensorflow as tf
import tensorflowjs as tfjs
from nltk.stem import WordNetLemmatizer
from tensorflow import keras
import subprocess

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
    tag = ""
    # Choose the tag with the highest probability
    print(np.max(results))
    tag = ""
    if np.max(results) > 0.53:
        tag_index = np.argmax(results)
        tag = tags[tag_index]
    else:
        tag = 'default'

    # Choose a random response from the tag's list of responses
    responses = []
    for intent in data['intents']:
        if intent['tag'] == tag:
            responses = intent['responses']
    response = random.choice(responses)

    return response, tag


def main():
    # Run the chatbot
    while True:
        # Get user input
        input_text = input("You: ")

        # Generate chatbot response
        response, tag_1 = generate_response(input_text)

        correct = input(f"Does this fall under the tag of {tag_1}? (y/n): ")
        json_data = ""
        with open('trainingdata.json', 'r+') as file:
            if correct == "y":
                json_data = json.load(file)
                tag_index = [i for i in range(len(json_data["intents"])) if json_data["intents"][i]["tag"] == tag_1][0]
                json_data["intents"][tag_index]["patterns"].append(input_text)
            elif correct == "n":
                json_data = json.load(file)
                correct_tag = input("What would the correct tag have been? ")
                if correct_tag == "":
                    print("You have chosen not to deal with this input right now")
                else:
                    try:
                        tag_index = [i for i in range(len(json_data["intents"])) if json_data["intents"][i]["tag"] == correct_tag][0]
                        json_data["intents"][tag_index]["patterns"].append(input_text)
                    except IndexError:
                        add_tag = input(f"The tag {correct_tag} does not exist in the training data. Would you like to add it? (y/n): ")
                        if add_tag == "y":
                            json_data["intents"].append({"tag": correct_tag, "patterns": [input_text]})
                    if random.randint(0, 9) == 0:
                        subprocess.run(["python", "model_train.py"])

            elif correct == "":
                print("You have chosen not to deal with this input right now")
            else:
                print("Not an answer lmao lol bad")
        with open('trainingdata.json', 'w') as file:
            json.dump(json_data, file, indent=2)

        # Print response
        print("Bot: " + response)
        


if __name__ == '__main__':
    main()
