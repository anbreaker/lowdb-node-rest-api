const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT

    // API lowdb
    this.usersRoutesPath = "/api"

    // Middlewares
    this.middlewares()

    // Rutas de la Aplicacion
    this.routes()
  }

  middlewares() {
    // cors to use Access-Control-Allow-Origin (Browsers)
    this.app.use(cors())

    // Read Express Data
    this.app.use(express.json())

    // From send data, undertand it, but not accept images etc... (Method of Express)
    this.app.use(express.urlencoded({ extended: true }))

    // Https views
    this.app.use(morgan("dev"))
  }

  routes() {
    // Config Patch to route!!
    this.app.use(this.usersRoutesPath, require("../routes/tasks.routes"))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`)
    })
  }
}

module.exports = Server
