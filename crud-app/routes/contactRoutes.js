const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

// Add Contact
router.post("/", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get Contact
router.get("/", async (req, res) => {
  try {
    const contact = await Contact.findOne();
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;