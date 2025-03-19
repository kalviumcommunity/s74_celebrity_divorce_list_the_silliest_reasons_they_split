const express = require("express");
const Divorce = require("../models/divorce"); // Import Divorce model
const router = express.Router();

// ✅ Get all divorce reasons
router.get("/", async (req, res) => {
    try {
        const divorces = await Divorce.find(); // Fetch data from MongoDB
        res.status(200).json(divorces); // Send response
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// ✅ Add a new divorce reason
router.post("/", async (req, res) => {  // ❌ Removed "/divorces" prefix
    try {
        const { celebrity1, celebrity2, reason } = req.body;
        const newDivorce = new Divorce({ celebrity1, celebrity2, reason });
        await newDivorce.save();
        res.json({ message: "Divorce reason added!", divorce: newDivorce });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Update a divorce reason
router.put("/:id", async (req, res) => { // ❌ Removed "/divorces" prefix
    try {
        const updatedDivorce = await Divorce.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedDivorce);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Delete a divorce reason
router.delete("/:id", async (req, res) => { // ❌ Removed "/divorces" prefix
    try {
        await Divorce.findByIdAndDelete(req.params.id);
        res.json({ message: "Divorce reason deleted!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
