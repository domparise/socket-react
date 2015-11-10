var ChatClient = require('./ChatClient.jsx');

var socket = io('http://localhost:5000/');

var data = {
    socket: socket
};

React.render(React.createElement(ChatClient, data), document.getElementById('container'));