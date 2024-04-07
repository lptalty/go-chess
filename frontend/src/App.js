import React, { useEffect } from 'react';
import { initWebSocket } from './websocketService';
import Board from "./components/Board/Board";
import "./App.css"; // Your App's CSS, if any

function App() {
  useEffect(() => {
    // Initialize WebSocket connection
    initWebSocket();
  }, []);
  
  return (
    <div className="App">
      <h2>Go Chess</h2>
      <Board />
    </div>
  );
}

export default App;
