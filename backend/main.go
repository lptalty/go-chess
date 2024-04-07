package main

import (
    "log"
    "net/http"
	"backend/game"
)

func main() {
    // Setup route for handling WebSocket connections
    http.HandleFunc("/ws", game.HandleConnections)

    // Start the server on localhost port 8000
    log.Println("http server started on :8000")
    err := http.ListenAndServe(":8000", nil)
    if err != nil {
        log.Fatal("ListenAndServe: ", err)
    }
}
