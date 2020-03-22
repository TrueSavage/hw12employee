const { createConnection } = require('mysql2');
const app = express()
const connection = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'rootroot',
  database: 'myemployee_db'
})
{
  var port = 8080
  app.listen(port);
  console.log(`Listening on port ${port}`);

})



module.exports = connection