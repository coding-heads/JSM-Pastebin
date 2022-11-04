const express = require('express');
const app = express();
const PORT = 3001;

/**
 * @TODO create a real route :-)
 */
app.get('/', (req, res) => {
    res.send("Hello world!");
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})