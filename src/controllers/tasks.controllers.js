const { response, request } = require("express")
const { getConnetion } = require("../db/database")

const { v4 } = require("uuid")

const getTasks = (req = request, res = response) => {
  const tasks = getConnetion().get("tasks").value()
  res.json(tasks)
}

const getTask = (req, res) => {
  const { id } = req.params

  const task = getConnetion().get("tasks").find({ id }).value()

  res.json(task)
}

const createTask = (req, res) => {
  const { name, description } = req.body

  const newTask = {
    id: v4(),
    name,
    description,
  }

  getConnetion().get("tasks").push(newTask).write()

  console.log(newTask)

  res.send("post new Task")
}

const updateTask = async (req, res) => {
  const { id } = req.params

  const taskUpdated = await getConnetion()
    .get("tasks")
    .find({ id })
    .assign(req.body)
    .write()

  res.json(taskUpdated)
}

const deleteTask = (req, res) => {
  const deleteTask = getConnetion().get("tasks").remove({ id: req.params.id }).write()

  res.json(deleteTask)
}

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask }
