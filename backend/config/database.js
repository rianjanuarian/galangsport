const { Sequelize } = require('sequelize');
const dbConfig = require('./config');

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        port: dbConfig.port,
        dialect: dbConfig.dialect,
        logging: dbConfig.logging,
        pool: dbConfig.pool,
        dialectOptions: dbConfig.dialectOptions,
    }
);

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Success Connection to Database PostgreSQL!');
    } catch (error) {
        console.error('❌ Failed Connection to Database PostgreSQL:', error.message);
    }
};

module.exports = { sequelize, testConnection };
