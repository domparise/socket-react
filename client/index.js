var Home = require('./components/home.jsx')

var container = React.render(React.createElement(Home, JSON.parse(document.getElementById('initialProps').innerHTML)), document.getElementById('container'), function () {
    var app = this; // for interactive debugging, and for attaching socket.io handlers to application
    console.log(app)
});