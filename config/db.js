Const { createConnection } = require('mysql2')

Const connection = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'rootroot',
  database: 'employees_db'
})
module.exports = connection