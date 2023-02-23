import json
import random
import numpy as np
import tensorflow as tf
import tensorflow_text as text

# Load the model
model = tf.keras.models.load_model('chatbot.h5')

# Load the vocabulary and encoder
with open('vocab_config.json') as f:
    config = json.load(f)
vocab = tf.keras.layers.experimental.preprocessing.TextVectorization.from_config(config)
encoder = text.WhitespaceTokenizer()

# Load the tags
with open('tags.json') as file:
    tags = json.load(file)

# Load the data
with open('intents.json') as file:
    data = json.load(file)

# Start the conversation
print("Let's chat! Type 'quit' to exit.")
while True:
    # Get user input
    user_input = input("You: ")
    if user_input.lower() == "quit":
        break

    # Preprocess the input
    user_input = [user_input]
    user_input_seq = vocab(np.array([text.split(user_input)])).numpy()

    # Get the model's prediction
    prediction = model.predict(user_input_seq)

    # Get the tag with the highest probability
    tag_idx = np.argmax(prediction)
    tag = tags[tag_idx]

    # Get a random response from the tag's responses
    for intent in data['intents']:
        if intent['tag'] == tag:
            print("Bot:", random.choice(intent['responses']))
            break
