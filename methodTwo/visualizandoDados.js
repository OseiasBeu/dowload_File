var sqlite = require('sqlite-sync');

sqlite.connect('myDatabase.db');

// var rows = sqlite.run("SELECT * FROM COMPANYS");
sqlite.run(".headers on");
sqlite.run(".mode csv");
sqlite.run(".output data.csv");

let rows = sqlite.run(" select * from COMPANYS;");
sqlite.run(".quit");
console.log(rows);