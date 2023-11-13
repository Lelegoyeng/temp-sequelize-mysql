const Sequelize = require('sequelize');
const dbConfig = require('../connection/config');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        timezone: '+07:00',
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.dialect,
        logging: false,
        operatorsAlises: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        },
        define: {
            underscoredAll: true,
            underscored: true,
            timestamps: true,
            paranoid: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at',
        },
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.hero = require('./hero.model')(sequelize, Sequelize);


module.exports = db