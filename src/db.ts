const { Sequelize } = require('sequelize');

export const sequelize = new Sequelize('postgres', 'challenge', 'challenge123', {
    host: 'localhost',
    dialect: 'postgres'
});
