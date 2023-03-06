import json
import random
import numpy as np
import tensorflow as tf
import nltk
from nltk.stem import WordNetLemmatizer

# Download the NLTK WordNet corpus if it hasn't been downloaded already
nltk.download('wordnet')

# Load the tokenizer from the JSON file
with open('tokenizer.json', 'r') as f:
    data = json.load(f)
    tokenizer = tf.keras.preprocessing.text.tokenizer_from_json(data)

# Define the labels and label encoder
with open('tags.json', 'r') as f:
    tags = json.load(f)

# Define the pre-trained model
model = tf.keras.models.load_model('chatbot.h5')

# Define the function to preprocess text
def preprocess_text(text):
    lem = WordNetLemmatizer()
    words = nltk.word_tokenize(text.lower())
    words = [lem.lemmatize(word) for word in words]
    text = " ".join(words)
    return text

# Define the function to predict the intent of a message
def predict_intent(message):
    preprocessed_message = preprocess_text(message)
    sequence = tokenizer.texts_to_sequences([preprocessed_message])
    sequence = tf.keras.preprocessing.sequence.pad_sequences(sequence, padding='post', maxlen=20)
    intent_probabilities = model.predict(sequence)[0]
    intent_index = np.argmax(intent_probabilities)
    intent_label = tags[intent_index]
    return intent_label, intent_index

with open('responses.json', 'r') as f:
    responses = json.load(f)

while True:
    # Test the predict_intent function
    message = input("Enter input to classify: ")
    intent, index = predict_intent(message)
    index += 1
    response_options = responses[index]
    sentence = response_options[random.randint(0, len(response_options) - 1)]
    print(f"The intent of the message '{message}' is {intent}.\nAn example response is '{sentence}'.")
    correct_intent = input("Is this response correct? (y/n) ")
    with open('intents.json', 'r') as f:
        data = json.load(f)
    if correct_intent.lower() == 'y':
        patterns = data["intents"][index]["patterns"]
        patterns.append(message)
        data["intents"][index]["patterns"] = patterns
    elif input("Would you like to add this to an existing tag? (y/n) ").lower() == 'y':
        which_tag = input("Which tag would you like to add it to? ")
        index = tags.index(which_tag) + 1
        patterns = data["intents"][index]["patterns"]
        patterns.append(message)
        data["intents"][index]["patterns"] = patterns
    else:
        continue
    with open('intents.json', 'w') as f:
        json.dump(data, f, indent=2)

