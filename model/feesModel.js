const Sequelize=require('sequelize');
const sequelize=require('../utils/Database');
const Fees=sequelize.define("Fees",{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    amount:{
        type:Sequelize.DOUBLE,
        allowNull:false,

    }
},{
    tableName:"Fees"
})
module.exports=Fees;