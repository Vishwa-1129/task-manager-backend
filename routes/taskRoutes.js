const express = require("express");
const { createTask, updateTask, deleteTask, getTasks } = require("../controllers/taskController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", protect, createTask);
router.put("/:taskId", protect, updateTask);
router.delete("/:taskId", protect, deleteTask);
router.get("/", protect, getTasks);

module.exports = router;
