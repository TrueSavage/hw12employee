const express = require('express');
const app = express();
// const db = require('./config/db.js');
const prompt = require('inquirer').createPromptModule();
const mysql = require('mysql');
const consoletable = require('console.table');
const join = require('path');

app.listen(3003, () => {
  console.log("server is up and running")
},

  myemployee = () => {

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


  }),

  viewAllEmployees = () => {
    const query = 'SELECT * FROM employee';
    connection.query(query, (err, res) => {
      if (err) return err
      console.table(res)
      myemployee()
    })
  },

  viewDepartment = () => {
    const query = 'SELECT * FROM department'
    connection.query(query, (err, res) => {
      console.table(res)
      myemployee()
    })
  },

  viewRoles = () => {
    const query = 'SELECT * FROM role'
    connection.query(query, (err, res) => {
      console.table(res)
      myemployee()
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

  myemployee()

  function newFunction(options) {
    console.table(options);
  }