var messagesRef = document.getElementById("chatbox")

function init() {
    if (messagesRef !== null) {
        messagesRef.scrollTop = messagesRef.scrollHeight;
    }
}

window.setTimeout(init, 50);
