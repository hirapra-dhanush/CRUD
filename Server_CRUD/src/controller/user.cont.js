const Task = require('../models/user.models');
const catchAsyncError = require('../middlewares/catchAsyncError');
const { ErrorHandler } = require('../middlewares/ErrorMiddl');


exports.createTask = catchAsyncError(async (req, res, next) => {
    const { task } = req.body;
    if (!task) return next(new ErrorHandler("Task is required", 400));

    const newTask = await Task.create({ task });
    res.status(201).json({ message: "Task created", data: newTask });
});


exports.getTasks = catchAsyncError(async (req, res, next) => {
    const tasks = await Task.find();
    res.status(200).json({ data: tasks });
});


exports.updateTask = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const { task } = req.body;

    const updated = await Task.findByIdAndUpdate(id, { task }, { new: true });

    if (!updated) return next(new ErrorHandler("Task not found", 404));

    res.status(200).json({ message: "Task updated", data: updated });
});


exports.deleteTask = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;

    const deleted = await Task.findByIdAndDelete(id);

    if (!deleted) return next(new ErrorHandler("Task not found", 404));

    res.status(200).json({ message: "Task deleted" });
});
