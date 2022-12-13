const express = require('express');
const path = require('path');

const app = express();
app.use('/', express.static(path.relative(__dirname, 'public')));
app.use('/src', express.static(path.relative(__dirname, 'src')));
app.use('/@react', express.static(path.relative(__dirname, '@react')));

const port = 3000;
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
