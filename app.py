from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the First Aid Chatbot!"

@app.route('/chat', methods=['POST'])
def chat():
    message = request.form['message']
    response = process_message(message)
    return response

def process_message(message):
    # Example implementation
    if 'fracture' in message:
        return "immobile the injured area and seek medical"
    elif 'burn' in message:
        return "Cool the burn with running water for at least 10 minutes and cover it with a sterile dressing."
    elif 'fever' in message:
        return " check temperature if above 99 degree farheniet take paracetamol"
    else:
        return "I'm sorry, I cannot provide guidance on that particular issue at the moment."

if __name__ == '_main_':
    app.run(debug=True)