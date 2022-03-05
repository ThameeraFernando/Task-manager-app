const res = require("express/lib/response");
//get the model
const Task = require("../models/Task");

//get all tasks
const getAlltasks = (req, res) => {
  res.status(200).send("Get all tasks");
};
//get single task
const getSingleTask = (req, res) => {
  res.status(200).send("Get single task");
};
//update a task
const updateTask = (req, res) => {
  const { name, tid } = req.body;
  const { id } = req.params;
  res.status(200).json({ name, tid, id });
};
//delete a task
const deleteTask = (req, res) => {
  res.status(200).send("Delete task");
};
//create a task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAlltasks,
  getSingleTask,
  updateTask,
  deleteTask,
  createTask,
};
