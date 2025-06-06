const mysql2 = require("mysql2/promise");

const connection = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "tes123",
  database: "mission_inter_be_2",
});

module.exports = connection;
