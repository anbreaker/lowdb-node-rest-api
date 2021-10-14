const { Router } = require("express")
const router = Router()

const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controllers")

router.get("/tasks", getTasks)
router.get("/tasks/:id", getTask)
router.post("/tasks", createTask)
router.put("/tasks/:id", updateTask)
router.delete("/tasks/:id", deleteTask)

module.exports = router
