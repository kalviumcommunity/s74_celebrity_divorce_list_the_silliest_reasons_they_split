const express = require('express');
const app = express();
const PORT = 8000;

app.get('/ping', (req, res) => {
    res.send('pong');
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}}`);
});
