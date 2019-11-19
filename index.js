let express = require('express');
let app = express();

app.get('/', function(req,res){
  res.download("./index.txt");
});

app.listen(3000,function(){
  console.log("Servidor na porta 3000");
});


// var path = require('path');
// var mime = require('mime');
// app.get('/download', function(req, res){

//   var file = 'index.html'

//   var filename = path.basename(file);
//   var mimetype = mime.lookup(file);

//   res.setHeader('Content-disposition', 'attachment; filename=' + filename);
//   res.setHeader('Content-type', mimetype);

//   var filestream = fs.createReadStream(file);
//   filestream.pipe(res);
// });