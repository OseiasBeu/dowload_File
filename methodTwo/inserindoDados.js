var sqlite = require('sqlite-sync');
 
sqlite.connect('myDatabase.db');
 
//Criando tabela
sqlite.run("CREATE TABLE COMPANYS(ID  INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL);");
 
//Inserindo dados
var id = sqlite.insert('COMPANYS',{ID: 1, NAME: "My Company"});
console.log(id)//Last insert id