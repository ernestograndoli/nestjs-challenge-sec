import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

export const ExchangeRateModel = sequelize.define(
  'exchange_rate',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  },
);
