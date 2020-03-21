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
app.set('port', process.env.PORT || 3003);
app.listen(3003, () => {
  console.log("server is up and running")
})
}


module.exports = connection