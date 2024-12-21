const socket = io();

// Chatbot functions
function openChatbot() {
    const chatbotWindow = document.getElementById('chatbot-window');
    chatbotWindow.style.display = chatbotWindow.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    const message = document.getElementById('chat-input').value;
    if (message) {
        socket.emit('chatMessage', message);  // Send message to server
        document.getElementById('chat-input').value = '';  // Clear input
    }
}

// Real-time message handling
socket.on('chatMessage', (msg) => {
    const chatbox = document.getElementById('chatbox');
    const newMessage = document.createElement('p');
    newMessage.textContent = msg;
    chatbox.appendChild(newMessage);
    chatbox.scrollTop = chatbox.scrollHeight;  // Auto-scroll to the bottom
});
