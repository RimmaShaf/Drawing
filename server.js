var express = require('express');
var zapiska ={};

var app = express();

const server = app.listen(process.env.PORT || 5000, function(){
	console.log('server listening on port '+ port);
});

const io = require('socket.io')(server);

server.use(express.static(__dirname + '/views'));
//server.set('view engine', 'ejs');
// This responds a GET request for the homepage

io.on('connection',(socket)=>{
	console.log('a user connected');
	socket.on('disconnect',()=>{
		console.log('user disconnected');
	});
});



server.get('/create_note', function (req, res) {
   console.log("Got a GET request for the homepage");
   // Prepare output in JSON format
   zapiska = {
     Name:req.query.name,
	 Note:req.query.note
   };
   console.log(zapiska);
   res.status(200).send(zapiska);//render('zapiska',{name:zapiska.Name, note:zapiska.Note});
});

server.get('/check_note', function(req,res){
 //  res.render('zapiska',{name:zapiska.Name, note:zapiska.Note});
  console.log("Sending note contents");
  res.status(200).send(zapiska);//render('zapiska',{name:zapiska.Name, note:zapiska.Note});
})


var port = 10001;
server.listen(port, function(){
	console.log('server listening on port '+ port);
});