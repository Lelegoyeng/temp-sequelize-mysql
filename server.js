const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());
const db = require('./models/index')


const testConnectionDB = require('./connection/testConnectionDB');
testConnectionDB();

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
