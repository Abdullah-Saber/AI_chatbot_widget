// Toggle the chatbot visibility
function toggleChat() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotIcon = document.getElementById('chatbot-icon');

    if (chatbotContainer.classList.contains('active')) {
        // Close the chatbot and show the icon
        chatbotContainer.classList.remove('active');
        setTimeout(() => chatbotContainer.classList.add('hidden'), 400); // Add hidden after animation
        chatbotIcon.style.display = 'block';  // Show the chatbot icon again
    } else {
        // Open the chatbot and hide the icon
        chatbotContainer.classList.remove('hidden');
        setTimeout(() => chatbotContainer.classList.add('active'), 10); // Add active after un-hiding
        chatbotIcon.style.display = 'none';  // Hide the chatbot icon
    }
}
  
  // Handle sending a message
  function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBody = document.getElementById('chat-body');
    const message = userInput.value.trim();
  
    if (message) {
      // Add user message to chat
      const userMessage = document.createElement('div');
      userMessage.className = 'chat-message user-message';
      userMessage.textContent = message;
      chatBody.appendChild(userMessage);
  
      // Simulate bot response
      const botMessage = document.createElement('div');
      botMessage.className = 'chat-message bot-message';
      botMessage.textContent = "I'll process your request soon!";
      chatBody.appendChild(botMessage);
  
      // Scroll to the latest message
      chatBody.scrollTop = chatBody.scrollHeight;
  
      // Clear input field
      userInput.value = '';
    }
  }
  
  // Handle file upload
  document.getElementById('file-upload').addEventListener('change', function () {
    const chatBody = document.getElementById('chat-body');
  
    // Add a message indicating a file has been uploaded
    const botMessage = document.createElement('div');
    botMessage.className = 'chat-message bot-message';
    botMessage.textContent = `File "${this.files[0].name}" uploaded successfully.`;
    chatBody.appendChild(botMessage);
  
    // Scroll to the latest message
    chatBody.scrollTop = chatBody.scrollHeight;
  });
  
  // Event listener for the chatbot icon to open the chatbot
document.getElementById('chatbot-icon').addEventListener('click', toggleChat);

// Event listener for closing the chatbot (close button in header)
document.getElementById('chatbot-close').addEventListener('click', toggleChat);
  