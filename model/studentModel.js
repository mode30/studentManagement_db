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
  department:{
    type:Sequelize.INTEGER,
    references:{
        model:"Departments",
        key:"id"
    }
  },
  email:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true
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