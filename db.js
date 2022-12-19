var mysql = require("mysql2");
var dbConn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "reactjs!nodejs$ingenieurinformatique",
  database: "mydatabase",
  multipleStatements: true,
  port: "8080",
});
module.exports = dbConn;
