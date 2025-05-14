const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
  status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  recurring: { type: Boolean, default: false },
  recurrenceInterval: { type: String, enum: ["daily", "weekly", "monthly"] },
});

module.exports = mongoose.model("Task", taskSchema);
