var express = require('express');
var app = express();

app.set('views', __dirname + '/client/components');
app.engine('jsx', require('express-react-engine')({wrapper: 'html.jsx'}));

app.use(express.static(__dirname+'/client/public'))

app.get('/', function (req, res) {
    return res.render('ChatClient.jsx', {});
});

var httpServer = require('http').createServer(app)
var io = require('engine.io')(httpServer);

io.on('connection', function (socket) {
    console.log(socket.id,'connected')
    
    socket.on('message', function (data) {
        console.log(data)
        // socket.broadcast.emit('msg',data)
    })

    socket.on('disconnect', function () {
        console.log(socket.id,'disconnected')
    })

});

httpServer.listen(5000)