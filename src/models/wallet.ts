import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

export const WalletModel = sequelize.define(
  'wallet',
  {
    id: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favourite: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  },
);
