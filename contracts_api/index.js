const express = require("express");
const bodyParser = require("body-parser");

const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "workshop_flutter",
});

app.get("/contact", async (req, res) => {
  var sql = "select * from contacts ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

app.get("/contact/:id", async (req, res) => {
  id = req.params.id;
  var sql = "select * from contacts where id= ?";
  var option = [id];
  con.query(sql, option, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

app.post("/contact", async (req, res) => {
  var fullname = req.body.fullname;
  var mobile = req.body.mobile;

  var sql = "INSERT INTO contacts VALUES (null, ?, ?)";
  con.query(sql, [fullname, mobile], function (err, result) {
    if (err) {
      res.json({ status: "error", message: err });
    } else {
      res.json({ status: "ok", message: "Insert Data Complete" });
    }
  });
});

app.put("/contact", async (req, res) => {
  var id = req.body.id;
  var fullname = req.body.fullname;
  var mobile = req.body.mobile;

  var sql = "update contacts set fullname=?,mobile=? where id=?";
  con.query(sql, [fullname, mobile, id], function (err, result) {
    if (err) {
      res.json({ status: "error", message: err });
    } else {
      res.json({ status: "ok", message: "Update Data Complete" });
    }
  });
});

app.delete("/contact/:id", async (req, res) => {
  var id = req.params.id;

  var sql = "delete from contacts where id=?";
  con.query(sql, [id], function (err, result) {
    if (err) {
      res.json({ status: "error", message: err });
    } else {
      res.json({ status: "ok", message: "Delete Data Complete" });
    }
  });
});

app.listen(3000, () => {
  console.log("Server Started on localhost:3000...");
});
