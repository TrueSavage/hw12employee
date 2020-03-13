const express = require('express')
const app = express()
const prompt = require('inquirer').createPromptModule()
const mysql = require('mysql')
const consoletable = require('console.table')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'rootroot',
  database: 'myemployee_db'
})
app.listen(3000, () => {
  console.log("server is up and running")
})

myemployee = () => {

  prompt({
    type: 'list',
    name: 'options',
    message: "What would you like to do?",
    choices: ['View All Employees', 'View All Department', 'View Roles', 'Add Employee', 'Add Role', 'Add Department', 'Update Employee Role']
  })
    .then((options) => {
      newFunction(options)
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
    myemployee_db()
  })
}

viewDepartment = () => {
  const query = 'SELECT * FROM department'
  connection.query(query, (err, res) => {
    console.table(res)
    myemployee_db()
  })
}

viewRoles = () => {
  const query = 'SELECT * FROM role'
  connection.query(query, (err, res) => {
    console.table(res)
    myemployee_db()
  })
}

addEmployee = () => {
  prompt(
    {
      type: 'input',
      name: 'first_name',
      message: 'First name:'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Last name:'
    },
    {
      type: 'list',
      name: 'department',
      message: 'Department:',
      choices: ['Engineering', 'HR', 'IT', 'Accounting', 'Sales']
    },
    {
      type: 'input',
      name: 'role',
      message: "Enter employee's role:"
    },
    {
      type: 'input',
      name: 'manager',
      message: "Enter employee's manager:"
    }
  )
}

myemployee()

function newFunction(options) {
  console.table(options)
}
