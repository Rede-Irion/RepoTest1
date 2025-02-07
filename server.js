const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST || 'localhost';

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});