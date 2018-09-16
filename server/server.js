const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Daniel',
    age: 38
  }, {
    name: 'Andrew',
    age: 25
  }, {
    name: 'Ana',
    age: 29
  }]);
});

app.listen(3000);

module.exports.app = app;