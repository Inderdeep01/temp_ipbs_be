const http = require('http')
require('dotenv').config()
const app = require('./app')

const server = http.createServer(app)

const PORT = process.env.port

server.listen(PORT)