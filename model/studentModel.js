const Sequelize=require('sequelize');
const sequelize=require('../utils/Database')
const Student=sequelize.define("Student",{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
  }, 
  firstname:{
    type:Sequelize.STRING,
    allowNull:false
  },
  lastname:{
    type:Sequelize.STRING,
    allowNull:false,
  },

  email:{
    type:Sequelize.STRING,
    allowNull:false,
    
  },
  Dob:{
    type:Sequelize.DATE,
    allowNull:false,
  },
 
    fees_paid:{
        type:Sequelize.DOUBLE,
        allowNull:false

    }
  },

{
  tableNames:"Students"
})
module.exports=Student;