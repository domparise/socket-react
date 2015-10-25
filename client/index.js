var ChatClient = require('./components/ChatClient.jsx')

var socket = require('engine.io-client')('ws://localhost:5000');

var data = JSON.parse(document.getElementById('initialProps').innerHTML);
data.socket = socket;

React.render(React.createElement(ChatClient, data), document.getElementById('container'));