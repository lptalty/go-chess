let ws;

function initWebSocket() {
  ws = new WebSocket("ws://localhost:8000/ws");

  ws.onopen = () => {
    console.log("WebSocket Connected");
  };

  ws.onmessage = (event) => {
    // Handle incoming messages
    const message = JSON.parse(event.data);
    // Process message
    console.log("message:", message);
  };

  ws.onclose = () => {
    console.log("WebSocket Disconnected");
    // Optionally try to reconnect
  };
}

function sendMessage(message) {
  if (ws) {
    ws.send(JSON.stringify(message));
  }
}

export { initWebSocket, sendMessage };
