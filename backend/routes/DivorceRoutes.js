const express = require("express");
const Divorce = require("../models/divorce"); // Import Divorce model
const router = express.Router();

// ✅ Get all divorce reasons

router.get("/divorces", async (req, res) => {
    try {
        const divorces = await Divorce.find();
        res.json(divorces);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Add a new divorce reason
router.post("/divorces", async (req, res) => {
    try {
        const { celebrity1,celebrity2, reason } = req.body;
        const newDivorce = new Divorce({ celebrity1,celebrity2, reason  });
        await newDivorce.save();
        res.json({ message: "Divorce reason added!", divorce: newDivorce });
    } catch (error) {
        // res.send("divorceerror")
        res.status(500).json({ error: error.message });
    }
});

// ✅ Update a divorce reason
router.put("/divorces/:id", async (req, res) => {
    try {
        const updatedDivorce = await Divorce.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedDivorce);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Delete a divorce reason
router.delete("/divorces/:id", async (req, res) => {
    try {
        await Divorce.findByIdAndDelete(req.params.id);
        res.json({ message: "Divorce reason deleted!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
