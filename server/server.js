const express = require('express');
const db = require('../database/db.js');
const bodyParser = require('body-parser');
let app = express();

app.use(express.static(__dirname + '../public'));
app.use(bodyParser.json());

app.listen(3032, () => {
  console.log('listening on port 3032');
});