const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const websocketInit = require('./configs/webSocket')
const { PORT } = process.env

websocketInit(server)

server.listen(PORT, () => console.log(`server is listen on port ${PORT}`))

process.on('SIGINT', () => {
  console.log(`
    RECIEVED TERMINATE SIGNAL...\n
    READY TO SHUTDOWN...\n`
  )
  process.exit()
})

process.on('SIGTERM', () => {
  console.log(`
    RECIEVED TERMINATE SIGNAL...\n
    READY TO SHUTDOWN...\n`
  )
  process.exit()
})

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code)
})
