const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());
const db = require('./models/index');
const routes = require("./routes/index");



const testConnectionDB = require('./connection/testConnectionDB');
testConnectionDB();

app.get("/", (_, res) => {
    res.send({ message: "Server Is Online. :)" });
});

routes.hero(app);

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
