# Student Management System

This project is a Student Management System built with Node.js, Express, and Sequelize ORM. It provides APIs for managing students, departments, faculties, schools, and fees.

## Project Structure

project_root

── config
   ── config.json

── controller
   ── departmentController.js
   ── errorController.js
   ── facultyController.js
   ── feesController.js
   ── schoolController.js
   ── studentController.js

── model
   ── departmentModel.js
    ── facultyModel.js
   ── feesModel.js
   ── schoolModel.js
   ── studentModel.js

── node_modules

── routes
   ── departmentRoutes.js
   ── errorRoutes.js
   ── facultyRoutes.js
   ── schoolRoutes.js
   ── studentRoutes.js

── utils
```

## Features

- CRUD operations for students, departments, faculties, schools, and fees
- Error handling
- Database migrations

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure your database in `config/config.json`#this step can be ignored
4. Run migrations: `npx sequelize-cli db:migrate`#this step can be ignored
5. Start the server: `npm start`

## API Endpoints

- Students: `/api/students`
- Departments: `/api/departments`
- Faculties: `/api/faculties`
- Schools: `/api/schools`
- Fees: `/api/fees`

For detailed API documentation, please refer to the individual controller files.

## Models

- Student
- Department
- Faculty
- School
- Fees

Each model has its corresponding controller and routes for handling CRUD operations.

## Error Handling

Custom error handling is implemented in `errorController.js` and `errorRoutes.js`.
