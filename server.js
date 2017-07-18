const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello Express!</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About page!</h1>');
});
app.listen(3000);
