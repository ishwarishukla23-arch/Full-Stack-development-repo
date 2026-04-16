const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
const auth = require("../middleware/authMiddleware");

// Submit Feedback (Protected by Auth)
router.post("/", auth, async (req, res) => {
  try {
    const { studentName, course, rating, message } = req.body;
    const newFeedback = new Feedback({ studentName, course, rating, message });
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Feedback (Public)
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;