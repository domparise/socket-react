var components = require('./components/index.jsx')

// this is the hackiest move in the whole framework
var reactElement = window.location.pathname==='/' ? components.home : components.CounterSet;

var container = React.render(React.createElement(reactElement, JSON.parse(document.getElementById('initialProps').innerHTML)), document.getElementById('container'), function () {
    var app = this; // for interactive debugging, and for attaching socket.io handlers to application
    console.log(app)
});