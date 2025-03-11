require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User"); // Import User Model

const router = express.Router();

// ✅ Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database Connected Successfully!");
}).catch((error) => {
    console.error("❌ Database Connection Failed:", error);
});

// ✅ Route to check API
router.get("/", (req, res) => {
    console.log("api is working")
    res.send("API is working!");
});

// ✅ Create a new user (Signup)
router.post("/users", async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        await newUser.save();
        res.json({ message: "User created successfully!", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Get all users
router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Update user
router.put("/users/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Delete user
router.delete("/users/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;