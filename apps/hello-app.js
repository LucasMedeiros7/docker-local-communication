// hello-app.js
const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Aplicação está rodando em http://localhost:3000');
});
