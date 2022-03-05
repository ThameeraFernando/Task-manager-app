const express = require("express");
const router = express.Router();
const {
  getAlltasks,
  getSingleTask,
  updateTask,
  deleteTask,
  createTask,
} = require("../controllers/tasks");

//get all tasks
router.get("/", getAlltasks);
//get single task
router.get("/:id", getSingleTask);
//create new task
router.post("/", createTask);
//delete a task
router.delete("/:id", deleteTask);
//update a task
router.patch("/:id", updateTask);

module.exports = router;
