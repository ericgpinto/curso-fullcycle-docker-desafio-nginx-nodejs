const express = require("express");
const app = express();
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");
const connection = mysql.createConnection(config);

app.get("/", (req, res) => {
  const sql = `SELECT p.name FROM people p`;
  connection.query(sql, function (err, results) {
    if (err) {
      throw err;
    }
    html = "<ul>";
    for (var i in results) html += "<li>" + results[i].name + "</li>";
    html += "<ul>";
    res.send("<h1>Full Cycle Rocks!</h1>" + html);
  });
});

app.listen(3000, () => console.log("O servidor está instalado e funcionando"));
