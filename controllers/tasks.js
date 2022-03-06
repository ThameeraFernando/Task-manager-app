const res = require("express/lib/response");
const asyncWrapper = require("../middleware/async");
//get the model
const Task = require("../models/Task");
const { createCustomerError, CustomAPIError } = require("../errors/errors");
//get all tasks
const getAlltasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});
//get single task
const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id: tid } = req.params;

  const task = await Task.findOne({ _id: tid });
  if (!task) {
    // const error = new Error("Not found");
    // error.status = 404;
    // return next(error);
    return next(createCustomerError(`no task with id ${tid}`, 404));
    // return res.status(404).json({ msg: `no task with id ${tid}` });
  }
  res.status(200).json({ task });
});
//update a task
const updateTask = asyncWrapper(async (req, res) => {
  const { id: tid } = req.params;

  const task = await Task.findOneAndUpdate({ _id: tid }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomerError(`no task with id ${tid}`, 404));
  }
  res.status(201).json({ task });
});

//delete a task
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: tid } = req.params;

  const task = await Task.findByIdAndDelete({ _id: tid });
  if (!task) {
    return next(createCustomerError(`no task with id ${tid}`, 404));
  }
  res.status(201).json({ task });
});
//create a task
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

module.exports = {
  getAlltasks,
  getSingleTask,
  updateTask,
  deleteTask,
  createTask,
};
