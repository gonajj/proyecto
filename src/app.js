const express = require('express');
const app= express();

//Servidor creado
const http = require('http').Server(app);

//generando la comunicación 

const io = require('socket.io')(http);

//generamos ruas o ruta

app.use(require('./routes/prueba1'));

//HTML

app.use(express.static(__dirname + "/public")); 


io.on('connection',(socket) => {

  	socket.on('stream',(image) => {

  		///emitir evento (testear mañana)
  		socket.broadcast.emit('stream', image);

  	})

})




module.exports = http;
