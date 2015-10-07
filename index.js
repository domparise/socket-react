var express = require('express');
var app = express();

app.set('views', __dirname + '/client/components');
app.engine('jsx', require('express-react-engine')({wrapper: 'document.jsx'}));

app.use(express.static(__dirname+'/client/public'))

app.get('/', function (req, res, next) {
  res.render('home.jsx', { foo: 'bar' });
});

app.listen(5000)