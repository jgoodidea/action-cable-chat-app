var messagesRef = document.getElementById("chatbox")

function init() {
    messagesRef.scrollTop = messagesRef.scrollHeight;
}

window.setTimeout(init, 50);
