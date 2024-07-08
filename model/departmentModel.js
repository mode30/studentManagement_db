const Sequelize=require('sequelize');
const sequelize=require('../utils/Database')
const Department=sequelize.define("Department",{
 id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
 },

 department_name:{
    type:Sequelize.STRING,
    reference:{
      model:"Schools",
      key:'id'
    }
 }

},{
   tableName:"Departments"
})
module.exports=Department;