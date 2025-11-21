function sendMsg() {
  const input = document.getElementById("msgInput");
  const text = input.value.trim();
  if (!text) return;

  const messages = document.getElementById("messages");

  const msg = document.createElement("div");
  msg.className = "msg";
  msg.innerText = text;

  messages.appendChild(msg);
  input.value = "";

  messages.scrollTop = messages.scrollHeight;
}
