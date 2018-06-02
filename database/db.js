const mongoose = require('mongoose');
const data = require('../data.json');

mongoose.connect('mongodb://127.0.0.1/tunestorm');

const songSchema = mongoose.Schema({
  id: Number,
  artist: String,
  title: String,
  plays: Number,
  likes: Number,
  reposts: Number,
  comments: Number,
  related_tracks: Array,
});

const Song = mongoose.model('Song', songSchema);

Song.collection.insertMany(data, (err, results) => {
  if (err) console.log(err);
  else console.log('success');
});
