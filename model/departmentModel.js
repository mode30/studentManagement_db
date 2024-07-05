const Sequelize=require('sequelize');
const sequelize=require('../utils/Database')
const Department=sequelize.define("Department",{
 id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
 },
 faculty:{
    type:Sequelize.INTEGER,
    reference:{
        model:"Faculty",
        key:"id",
    }
 },
 department_name:{
    type:Sequelize.STRING,
    allowNull:false
 } ,

},{
   tableName:"Departments"
})
module.exports=Department;