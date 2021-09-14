import { DataTypes } from 'sequelize';
import { Sequelize } from 'sequelize/types';

export default (sequelize: Sequelize) => {
  sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  });
};
