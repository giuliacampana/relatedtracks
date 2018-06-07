const express = require('express');
const db = require('../database/db.js');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());


app.get('/songs/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);

  db.findSongById(id, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
});

app.post('/songs/:id/likes', (req, res) => {
  const id = req.params.id;
  db.updateLikeCount(id, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
});

app.post('/songs/:id/reposts', (req, res) => {
  const id = req.params.id;
  db.updateRepostCount(id, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
});

app.post('/songs/:id/plays', (req, res) => {
  const id = req.params.id;
  db.updatePlayCount(id, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
});

app.post('/songs/:id/comments', (req, res) => {
  const id = req.params.id;
  db.updateCommentCount(id, (err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
});

const server = app.listen(3032, () => {
  console.log('listening on port 3032');
});

module.exports = server;
