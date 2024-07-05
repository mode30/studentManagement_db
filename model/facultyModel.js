const Sequelize=require('sequelize');
const sequelize=require('../utils/Database')
const Faculty=sequelize.define("Faculty",{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,

    },
    faculty_name:{
        type:Sequelize.STRING,
        allowNull:false,
    }
},{
    tableNames:"Faculties"
})
module.exports=Faculty;