const { createConnection } = require('mysql2');

const connection = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'rootroot',
  database: 'myemployee_db'
});
// app.listen(3001, () => {
//   console.log("server is up and running")
// })


module.exports = connection