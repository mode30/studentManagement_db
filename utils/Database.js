
const dotenv = require('dotenv');
dotenv.config();

console.log('DB_NAME:', process.env.PORT);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('USER:', process.env.USER);
console.log('PASSWORD:', process.env.PASSWORD);

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: "mysql"
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
