let express = require('express');
let app = express();
let sqlite = require('sqlite-sync');

sqlite.connect('myDatabase.db');

let rows = sqlite.run("sqlite3 -header -csv myDatabase.db select * from tracks; > tracks.csv");

console.log(rows);


app.get('/', function(req,res){
  res.download("./index.txt");
});

app.listen(3000,function(){
  console.log("Servidor na porta 3000");
});



