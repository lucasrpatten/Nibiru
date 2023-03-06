import json

with open('intents.json', 'r') as f:
    intents = json.load(f)
with open('tags.json', 'r') as f:
    tags = json.load(f)

response_intents = []
intents = intents['intents']

for i in range(len(intents)):
    response_intents.append(intents[i]["responses"])
with open('responses.json', 'w') as f:
    json.dump(response_intents, f)