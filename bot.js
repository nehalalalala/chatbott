function sendMessage() {
    var userInput = document.getElementById("user-input");
    var userMessage = userInput.value.trim();

    if (userMessage !== "") {
        displayMessage(userMessage, "user-message");
        userInput.value = "";

        // Process the user message
        processUserMessage(userMessage);
    }
}

function displayMessage(message, className) {
    var chatDisplay = document.getElementById("chat-display");
    var messageElement = document.createElement("div");
    messageElement.classList.add("message", className);
    messageElement.innerHTML = message;
    chatDisplay.appendChild(messageElement);

    // Scroll to the bottom of the chat display
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

function processUserMessage(message) {
    // Map of input messages to corresponding responses
    var responses = {
        "bleeding": "Apply direct pressure to the wound and elevate the injured area.if more problem consult your nearest doctor.",
        "burn": "Cool the burn with running water for at least 10 minutes and cover it with a sterile dressing.if more problem consult your nearest doctor.",
        "fracture": "Immobilize the injured area and seek medical help immediately.if more problem consult your nearest doctor.",
        "fever": "Check temperature if above 99 degree farheniet take a paracetamol. if more problem consult your nearest doctor.",
        "cough": "take steam and do Gargles with luke warm water twice a day .if more problem consult your nearest doctor.",
        "hi": "hello how can i help you?",
        "hello": "hello how can i help you?",

        // Add more mappings here as needed
    };

    var botResponse = responses[message.toLowerCase()];
    if (botResponse) {
        displayMessage(botResponse, "bot-message");
    } else {
        displayMessage("I'm sorry, I don't have a response for that.", "bot-message");
    }
}

// Handle Enter key press event
document.getElementById("user-input").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        sendMessage();
    }
});