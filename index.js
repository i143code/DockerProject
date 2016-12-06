var express = require('express');

// Constants
var PORT = process.env.PORT || 8080;

// App
var app = express();
app.use(express.static('public'))
app.use(express.static('src/views'))
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
