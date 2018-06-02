const express = require('express');
const db = require('../database/db.js');
const bodyParser = require('body-parser');
const path = require('path');
// const url = require('url');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());


app.get('/songs/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.send('got');
});

app.post('/likes');

app.post('/reposts');

app.post('/plays');

app.listen(3032, () => {
  console.log('listening on port 3032');
});
