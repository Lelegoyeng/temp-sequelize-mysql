const { Sequelize } = require('sequelize');
const dbConfig = require('../config');


const sequelize = new Sequelize('testsquelize', 'root', '', {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
});

const testConnectionDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


module.exports = testConnectionDB;