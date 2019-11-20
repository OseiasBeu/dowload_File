let sqlite = require('sqlite-sync');

//Connecting
sqlite.connect('myDatabase.db');

//Create example table
sqlite.run("CREATE TABLE COMPANYS(ID  INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL);");