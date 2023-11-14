const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());
const db = require('./models/index');
const routes = require("./routes/index");

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Table is synchronized.');
    })
    .catch((err) => {
        console.error('Error synchronizing table:', err);
    });

const testConnectionDB = require('./connection/testConnectionDB');
testConnectionDB();

app.get("/", (_, res) => {
    res.send({ message: "Server Is Online. :)" });
});

app.use(routes)

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
