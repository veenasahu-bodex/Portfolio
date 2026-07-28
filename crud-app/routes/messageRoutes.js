const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// Save Message
router.post("/", async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).json({
      message: "Message Sent Successfully",
      data: message,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Messages
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;