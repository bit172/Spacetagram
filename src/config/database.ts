import { Sequelize } from 'sequelize';
import User from '../models/user.model';

const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const models = [User];

for (const modelDefiner of models) {
  modelDefiner(db);
}

export default db;
