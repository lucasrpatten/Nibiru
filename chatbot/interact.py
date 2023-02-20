import json
import numpy as np
import tensorflow as tf
import tensorflowjs as tfjs
import tensorflow_text as text

# Load the saved model
model = tf.keras.models.load_model('chatbot_model.h5')

# Load the vocabulary
with open('./vocab_config.json') as f:
    config = json.load(f)
with open('./vocab.json') as f:
    vocab_list = json.load(f)
vocab = tf.keras.layers.experimental.preprocessing.TextVectorization.from_config(config)
# Load the tags
with open('tags.json') as file:
    tags = json.load(file)

# Define a function to process the user's input and get the model's prediction
def get_prediction(input_text):
    # Convert the input text to a sequence of integers using the vocabulary
    input_seq = vocab(np.array([input_text]))
    # Get the model's prediction for the input sequence
    prediction = model.predict(input_seq)[0]
    # Get the tag with the highest predicted probability
    tag_idx = np.argmax(prediction)
    tag = tags[tag_idx]
    # Return the predicted tag and probability
    return tag, prediction[tag_idx]

# Define a loop to get user input and respond with the model's prediction
print('Chatbot is ready. Type "exit" to end the conversation.')
while True:
    # Get user input
    user_input = input('You: ')
    if user_input.lower() == 'exit':
        break
    # Get the model's prediction for the user input
    tag, prob = get_prediction(user_input)
    # If the probability is below a threshold, treat it as unknown intent
    threshold = 0.3
    if prob < threshold:
        tag = 'unknown'
    # Look up the appropriate response for the predicted tag
    for intent in data['intents']:
        if intent['tag'] == tag:
            responses = intent['responses']
            break
    # Select a random response from the list of possible responses
    response = np.random.choice(responses)
    # Print the response
    print('Chatbot:', response)
