import { DataTypes } from 'sequelize'
import { sequelize } from './db';



export const WalletModel = sequelize.define('wallet', {
    // Model attributes are defined here
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    imestamps: false,
    createdAt: false,
    updatedAt: false,
});