const express = require('express');
const app = express();
const db = require('./app')
// // const db = require('./config/db.js');
// const prompt = require('inquirer').createPromptModule();
// const mysql = require('mysql');
// const consoletable = require('console.table');
// const join = require('path');
const prompt = require('inquirer').createPromptModule();
const mysql = require('mysql');
const consoletable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'rootroot',
  database: 'employee_db'
})

var port = 8080
app.listen(port);
console.log(`Listening on port ${port}`);
// // const listener = app.listen(process.env.PORT || 3003, () => {
// //   console.log('Your app is listening on port ' + listener.address().port)
// })
// app.listen(3003, () => {
//   console.log("server is up and running")
// },

  employee = () => {

    prompt({
      type: 'list',
      name: 'options',
      message: "What would you like to do?",
      choices: ['View All Employees', 'View All Departments', 'View Roles', 'Add Employee', 'Add Role', 'Add Department', 'Update Employee Role']
    })
      .then((options) => {

        switch (options) {
          case 'View All Employees':
            viewAllEmployees()
            break;
          case 'View All Departments':
            viewDepartments()
            break;
          case 'View Roles':
            viewRoles()
            break;
          case 'Add Employee':
            addEmployee()
            break;
          case 'Add Role':
            addRole()
            break;
          case 'Add Department':
            addDepartment()
            break;
          case 'Update Employee Role':
            updateRole()
            break;
        }
      })
      .catch(e => console.log(e))


  }

  viewAllEmployees = () => {
    const query = 'SELECT * FROM employee';
    connection.query(query, (err, res) => {
      if (err) return err
      console.table(res)
      employee()
    })
  },

  viewDepartment = () => {
    const query = 'SELECT * FROM department'
    connection.query(query, (err, res) => {
      console.table(res)
      employee()
    })
  },

  viewRoles = () => {
    const query = 'SELECT * FROM role'
    connection.query(query, (err, res) => {
      console.table(res)
      employee()
    })
  },

  addEmployee = () => {
    prompt(
      {
        type: 'input',
        name: 'first_name',
        message: 'First Name:'
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'Last Name:'
      },
      {
        type: 'list',
        name: 'department',
        message: 'Department:',
        choices: ['Development', 'Implementation', 'Research', 'Training', 'Production']
      },
      {
        type: 'input',
        name: 'role title',
        message: "Enter employee's role:",
        choices: ['Software Engineer', 'Research Analyst', 'Junior Developer', 'Intern', 'Tech Support Specialist', 'Account Executive', 'Senior Developer', 'Data Analyst', 'UI UX Designer',]
      },
      {
        type: 'input',
        name: 'manager',
        message: "Enter employee's manager:"
      }
    )
  },

  employee()

function newFunction(options) {
  console.table(options);
}