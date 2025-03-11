require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
const routes = require("./routes"); // Import routes

const app = express();
const PORT = 3000;

const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
    try {
        await client.connect();
        console.log("✅ Database Connected Successfully!");
    } catch (error) {
        console.error("❌ Database Connection Failed:", error);
    }
}

connectDB();

app.use(express.json()); // Middleware to parse JSON
// app.locals.client = client; // Store DB client for routes

app.use("/api", routes); // Use the CRUD routes

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});