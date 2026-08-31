require("dotenv").config();

const baseConfig = {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || process.env.DB_PASS || null,
    database: process.env.DB_NAME || "galsport",
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    logging: false,
    pool: {
        max: 15,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    dialectOptions: {
        connectTimeout: 10000,
    },
};

module.exports = {
    development: baseConfig,
    test: baseConfig,
    production: baseConfig,
    ...baseConfig,
};

