import consumer from "./consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    console.log('Connected to the Chat channel');
  },

  disconnected() {
    console.log('Disconnected from the Chat channel');
  },

  received(data) {
    var messagesRef = document.getElementById("chatbox")

    // convert string to html element
    var div = document.createElement('div');
    div.innerHTML = data['message'].trim();

    if (messagesRef !== null) {
      messagesRef.append(div.firstChild);
      messagesRef.scrollTop = messagesRef.scrollHeight;
    }
  }
});
