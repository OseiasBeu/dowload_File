let mysql = require('mysql');
let con = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  // database: "mydb"
});
let express = require('express');
let app = express();

app.get('/', function(req,res){
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM nps.selectnps", function (err, result, fields) {
      console.log(fields);
      res.send(result)
    });
  });
});

app.listen(3000,function(){
  console.log("Servidor na porta 3000");
});

