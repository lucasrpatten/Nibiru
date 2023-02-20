import json
import numpy as np
import tensorflow as tf
import tensorflow_text as text
from keras.models import load_model
import tensorflowjs as tfjs

# Load the vocabulary
with open('vocab_config.json') as f:
    config = json.load(f)
with open('intents.json') as f:
    data = json.load(f)
vocab = tf.keras.layers.experimental.preprocessing.TextVectorization.from_config(config)

# Load the model
model = load_model('chatbot_model.h5')

# Load the label encoder
with open('tags.json') as file:
    labels = json.load(file)
label_encoder = {label: i for i, label in enumerate(labels)}

# Define a function to preprocess input text


def preprocess_text(text):
    return vocab(np.array([text])).numpy()[0]

# Define a function to predict the intent of a given text


def predict_intent(query):
    # Preprocess the text
    query = preprocess_text(query)

    # Make a prediction
    prediction = model.predict(np.array([query]))

    # Get the predicted label
    label_idx = np.argmax(prediction)
    label = labels[label_idx]

    # Get the confidence score
    confidence = prediction[0][label_idx]
    print(f"query: {query}\nprediction: {label}\nprediction: {prediction}\nlabel: {label}\nlabel_idx: {label_idx}\nconfidence: {confidence}")

    return label, confidence

# Define a function to get a response for a given intent


def get_response(intent):
    for example in data['intents']:
        if example['tag'] == intent:
            response = np.random.choice(example['responses'])
            return response

# Define a function to start the chatbot


def start_chatbot():
    print("Welcome to the chatbot! Type 'exit' to end the conversation.")
    while True:
        # Get user input
        user_input = input("You: ")

        # Check if the user wants to exit
        if user_input.lower() == 'exit':
            break

        # Predict the intent of the user's input
        intent, confidence = predict_intent(user_input)

        # Check if the intent is above a certain confidence threshold
        if confidence < 0.5:
            print("Sorry, I didn't understand what you said. Can you please rephrase?")
            continue

        # Get a response for the predicted intent
        response = get_response(intent)

        # Print the response
        print("Chatbot: " + response)


# Start the chatbot
start_chatbot()
