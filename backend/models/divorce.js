const mongoose = require("mongoose");

const DivorceSchema = new mongoose.Schema({
    celebrity1: {
        type: String,
        required: true,
        trim: true
    },
    celebrity2: {
        type: String,
        required: true,
        trim: true
    },
    reason: {
        type: String,
        required: true,
        trim: true
    },
    upvotes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Divorce", DivorceSchema);

