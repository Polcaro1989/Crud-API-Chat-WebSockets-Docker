import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('crud', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;