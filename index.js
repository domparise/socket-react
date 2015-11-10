var express = require('express')
var app = express()

app.use(express.static(__dirname+'/public'))

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/public/index.html')
})

var httpServer = require('http').createServer(app)
var io = require('socket.io')(httpServer)

io.on('connection', function (socket) {
    console.log(socket.id,'connected')
    
    socket.on('msg', function (data) {
        console.log(data)
        socket.broadcast.emit('msg',data)
    })

    socket.on('disconnect', function () {
        console.log(socket.id,'disconnected')
    })

})

httpServer.listen(5000)