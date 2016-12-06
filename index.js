var express = require('express');

// Constants
var port = process.env.PORT || 8000;

// App
var app = express();
app.use(express.static('public'))
app.use(express.static('src/views'))
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(port,function(){
  console.log('Listening to 8000')
})
