
const dotenv = require('dotenv');
dotenv.config();

console.log('DB_NAME:', process.env.PORT);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('USER:', process.env.USER);
console.log('PASSWORD:', process.env.PASSWORD);

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, "root", "Pr1v@te2018", {
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
