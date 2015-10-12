var express = require('express');
var app = express();

app.set('views', __dirname + '/client/components');
app.engine('jsx', require('express-react-engine')({wrapper: 'html.jsx'}));

app.use(express.static(__dirname+'/client/public'))

app.get('/', function (req, res) {
    return res.render('home.jsx', { foo: 'bar' });
});

app.get('/:num', function (req, res) {
    return res.render('CounterSet.jsx', { num: req.params.num });
});

app.listen(5000)