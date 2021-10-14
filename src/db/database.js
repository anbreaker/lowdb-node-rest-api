const lowDB = require("lowdb")

const FileAsync = require("lowdb/adapters/FileAsync")

let db

const createConnection = async () => {
  const adapter = new FileAsync("db.json")

  db = await lowDB(adapter)
  db.defaults({ tasks: [] }).write()
}

const getConnetion = () => db

module.exports = { createConnection, getConnetion }
