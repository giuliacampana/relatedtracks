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
  relatedTracks: Array,
});

const Song = mongoose.model('Song', songSchema);

Song.collection.insertMany(data, (err, results) => {
  if (err) console.log(err);
  else console.log('success');
});

const findSongById = (id, callback) => {
  Song.find({ id }, (err, fetchedSong) => {
    if (err) callback(err, null);
    else callback(null, fetchedSong);
  }).limit(1);
};

module.exports = {
  findSongById,
};

