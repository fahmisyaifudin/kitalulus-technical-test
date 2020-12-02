// import winston from 'winston';
// import logger from '../../utils/logger';
require('dotenv').config();

const { POSTGRES_USER, POSTGRES_DB, POSTGRES_HOST, POSTGRES_PASSWORD, PORTS_DB} = process.env;

module.exports = {
    "development": {
        "username": POSTGRES_USER,
        "password": POSTGRES_PASSWORD,
        "database": POSTGRES_DB,
        "host": POSTGRES_HOST,
        "port": PORTS_DB,
        "dialect": "postgres",
        "logging": false,
        // "benchmark": true,
        "define": {
            "timestamps": true,
        },
        operatorsAliases: false
    },
    "staging": {
        "username": POSTGRES_USER,
        "password": POSTGRES_PASSWORD,
        "database": POSTGRES_DB,
        "host": POSTGRES_HOST,
        "port": PORTS_DB,
        "dialect": "postgres",
        "logging": false,
        // "benchmark": true,
        "define": {
            "timestamps": true,
        },
        operatorsAliases: false
    },
    "staging": {
        "username": POSTGRES_USER,
        "password": POSTGRES_PASSWORD,
        "database": POSTGRES_DB,
        "host": POSTGRES_HOST,
        "port": PORTS_DB,
        "dialect": "postgres",
        "logging": false,
        // "benchmark": true,
        "define": {
            "timestamps": true,
        },
        operatorsAliases: false
    },
}

// module.exports = {
//     "development": {
//         "username": process.env.POSTGRES_USER,
//         "password": process.env.POSTGRES_PASSWORD,
//         "database": process.env.POSTGRES_DB,
//         "host": process.env.POSTGRES_HOST,
//         "port": process.env.PORTS_DB,
//         "dialect": "postgres",
//         // "logging": (msg) => logger.info(msg),
//         "logging": false,
//         "benchmark": true,
//         "define": {
//             // "underscored": true,
//             "timestamps": true,
//         }
//     },
//     "production": {
//         "username": process.env.POSTGRES_USER,
//         "password": process.env.POSTGRES_PASSWORD,
//         "database": process.env.POSTGRES_DB,
//         "host": process.env.POSTGRES_HOST,
//         "port": process.env.PORTS_DB,
//         "dialect": "postgres",
//         // "logging": logger.debug.bind(logger),
//         "define": {
//             // "underscored": true,
//             "timestamps": true,
//         }
//     }
// }