const wsUri = "wss://echo-ws-service.herokuapp.com/";

function openChat() {
  const chatMessages = document.querySelector(".chat-messages");
  const chatInput = document.querySelector(".chat-input");
  const btnSend = document.querySelector(".btn-outline-primary");
  const btnGeo = document.querySelector(".btn-outline-secondary");

  let webSocket = new WebSocket(wsUri);
  webSocket.onopen = () => console.log("On open");
  webSocket.onmessage = (push) => {
    pushToChat(push.data, true);
  };
  function pushToChat(text, isRecivied) {
    let textHTML = `
        <div class='${isRecivied ? "server" : "client"}'>${text}</div>
        `;

    chatMessages.innerHTML += textHTML;
  }
  btnSend.addEventListener("click", () => {
    if (!chatInput.value) return;
    webSocket.send(chatInput.value);
    pushToChat(chatInput.value, false);
  });

  function pushGeo(location) {
    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;
    let textHTML = `
    <div class="client">Широта: ${latitude} °</br> Долгота: ${longitude} °</div>
    `;
    chatMessages.innerHTML += textHTML;
  }

  btnGeo.addEventListener("click", () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(pushGeo);
  });
}

document.addEventListener("DOMContentLoaded", openChat);
