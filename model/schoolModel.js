const Sequelize=require('sequelize');
const sequelize=require('../utils/Database')
const School=sequelize.define("School",{
    id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
    },
    school_name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    location:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    // department:{
    //     type:Sequelize.INTEGER,
    //     allowNull:true,
    //     default:"#",
    //     references:{
    //         model:"Departments",
    //         key:'id'
    //     }
    // }

},{
    tableName:"Schools"
})
module.exports=School;