const res = require("express/lib/response");
//get the model
const Task = require("../models/Task");

//get all tasks
const getAlltasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};
//get single task
const getSingleTask = async (req, res) => {
  const { id: tid } = req.params;
  try {
    const task = await Task.findOne({ _id: tid });
    res.status(200).json({ task });
    if (!task) {
      return res.status(404).json({ msg: `no task with id ${tid}` });
    }
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};
//update a task
const updateTask = async (req, res) => {
  const { id: tid } = req.params;
  try {
    const task = await Task.findOneAndUpdate({ _id: tid }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({ task });

    if (!task) {
      return res.status(404).json({ msg: `no task with id ${tid}` });
    }
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

//delete a task
const deleteTask = async (req, res) => {
  const { id: tid } = req.params;
  try {
    const task = await Task.findByIdAndDelete({ _id: tid });
    res.status(201).json({ task });
    if (!task) {
      return res.status(404).json({ msg: `The task id ${tid} not found.` });
    }
  } catch (error) {
    res.status(500).send({ msg: error });
  }
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
