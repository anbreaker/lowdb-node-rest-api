require("dotenv").config()

const Server = require("./models/server")
const { createConnection } = require("./db/database")

const server = new Server()

// Generate db.json
createConnection()

// Up Server and listen
server.listen()
