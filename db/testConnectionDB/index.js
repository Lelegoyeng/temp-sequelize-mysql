const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testsquelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
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