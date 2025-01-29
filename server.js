const PORT = process.env.PORT || 8000;
const app = require('express')();

app.listen(PORT, (err) => {
    if (err) {
        console.error(`Error starting server: ${err.message}`);
        process.exit(1); // Exit the process with failure code
    }
    console.log(`Server is running on http://localhost:${PORT}`);
});
