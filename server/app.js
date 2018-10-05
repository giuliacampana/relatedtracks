const express = require('express');
const db = require('../database/db.js');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/songs/:id', express.static(path.join(__dirname, '../public')));
app.use('/songs/:id', express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());


app.get('/api/songs/:id', (req, res) => {
  const id = req.params.id;
  db.findSongById(id, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
});

app.post('/api/songs/:id/likes', (req, res) => {
  const id = req.params.id;
  db.updateLikeCount(id, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
});

app.post('/api/songs/:id/reposts', (req, res) => {
  const id = req.params.id;
  db.updateRepostCount(id, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
});

app.post('/api/songs/:id/plays', (req, res) => {
  const id = req.params.id;
  db.updatePlayCount(id, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
});

const server = app.listen(3032, () => {
  console.log('listening on port 3032');
});

module.exports = server;

  