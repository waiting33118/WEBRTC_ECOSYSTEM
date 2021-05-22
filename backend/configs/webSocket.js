const WebSocket = require('ws')

const websocketInit = (server) => {
  const ws = new WebSocket.Server({ server })

  ws.on('connection', (socket) => {
    console.log('new connection')

    socket.on('message', (data) => {
      data = JSON.parse(data)
      console.log(data)

      ws.clients.forEach(client => {
        if (client !== socket && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(data))
        }
      })
    })

    socket.on('close', () => {
      console.log('close connection')
    })
  })
}

module.exports = websocketInit
