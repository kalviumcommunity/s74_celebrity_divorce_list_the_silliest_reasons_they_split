require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { resolve } = require('path');

const app = express();
const port = process.env.PORT || 3010;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('static'));

// MongoDB Connection
let dbStatus = "Not connected";

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to database');
    dbStatus = "Connected to database";
})
.catch((err) => {
    console.error('Error connecting to database', err);
    dbStatus = "Error connecting to database";
});

// Home Route with DB Status
app.get('/', (req, res) => {
  res.send(`<h1>Database Status: ${dbStatus}</h1>`);
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
