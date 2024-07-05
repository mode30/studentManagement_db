const dotenv=require('dotenv');
dotenv.config()
const express=require('express');
const app=express()
const bodyParser=require('body-parser');
const Sequelize=require('sequelize');
const sequelize = require('./utils/Database');
const Faculty=require('./model/facultyModel');
const School=require('./model/schoolModel');
const Department = require('./model/departmentModel');
const Student = require('./model/studentModel');
const Fees = require('./model/feesModel');
const departmentRoutes=require('./routes/departmentRoutes')
const facultyRoutes=require('./routes/facultyRoutes')
const feesRoutes=require('./routes/feesRoutes')
const schoolRoutes=require('./routes/schoolRoutes')
const studentRoutes=require('./routes/studentRoutes')
const errorRoutes=require('./routes/errorRoutes')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

Faculty.belongsTo(School,{foreignKey:"schoolId"})
School.hasMany(Faculty,{foreignKey:"schoolId"})

Department.belongsTo(Faculty,{foreignKey:"facultyId"});
Faculty.hasMany(Department,{foreignKey:"facultyId"})

Student.belongsTo(Department,{foreignKey:"departmentId"});
Department.hasMany(Student,{foreignKey:"departmentId"});

Student.belongsTo(School,{foreignKey:"schoolId"})
School.hasMany(Student,{foreignKey:"schoolId"})

// Student.hasOne(School)

Fees.belongsTo(Department,{foreignKey:"departmentId"})
Department.hasOne(Fees,{foreignKey:'departmentId'})
Fees.belongsTo(Student,{foreignKey:"studentId"})
Student.hasOne(Fees,{foreignKey:"studentId"})
app.use("/api",departmentRoutes)
app.use("/api",facultyRoutes)
app.use("/api",feesRoutes)
app.use("/api",schoolRoutes)
app.use("/api",studentRoutes)
app.use("/api",errorRoutes)
sequelize.sync().then(() => {
    
    app.listen(process.env.PORT||3000,()=>{
    console.log("Server Started")
})
}).catch((err) => {
   console.log("Error starting Server..",err);
});

