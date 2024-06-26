// Hide the chat container on page load
document.getElementById("chat-container").style.display = "none";

document.getElementById("user-input").addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { // Check if Enter key is pressed
    event.preventDefault(); // Prevent default behavior (e.g., new line in textarea)
    sendMessage(); // Call sendMessage function
  }
});

document.querySelector('.chat-toggle').addEventListener('click', function() {
  document.getElementById('user-input').focus();
});

document.addEventListener('click', function(event) {
  var chatContainer = document.getElementById('chat-container');
  var chatToggle = document.querySelector('.chat-toggle');
  if (!chatContainer.contains(event.target) && !chatToggle.contains(event.target)) {
    chatContainer.style.display = 'none';
  }
});

function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  if (userInput.trim() !== "") {
    var chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += "<div class='chat-message user-message'><div class='message-text'><p>" + userInput + "</p></div></div>";
    // Simulate bot response
    setTimeout(function() {
      chatBox.innerHTML += "<div class='chat-message bot-message'><img src='assets/images/drawstringschat.png' alt='Chatbot Image' class='chat-message-image'><div class='message-text'><p>Text us on Whatsapp via +254706890007</p></div></div>";
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
    document.getElementById("user-input").value = "";
  }
}

function toggleChat() {
  var chatContainer = document.getElementById("chat-container");
  chatContainer.style.display = chatContainer.style.display === "none" ? "block" : "none";
}
