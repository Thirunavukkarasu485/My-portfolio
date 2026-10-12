import { Router } from "express";
import Contact from "../models/Contact.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Please fill in all fields."
      });
    }

    await Contact.create({ name, email, message });

    res.status(201).json({
      success: true,
      message: "Message sent successfully!"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Could not save your message."
    });
  }
});

export default router;
