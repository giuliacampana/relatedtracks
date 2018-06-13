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

const updateLikeCount = (id, callback) => {
  Song.findOne({ id }, (err, song) => {
    if (err) console.log(err);
    song.likes += 1;
    song.save(callback);
  });
};

const updateRepostCount = (id, callback) => {
  Song.findOne({ id }, (err, song) => {
    if (err) console.log(err);
    song.reposts += 1;
    song.save(callback);
  });
};

const updatePlayCount = (id, callback) => {
  Song.findOne({ id }, (err, song) => {
    if (err) console.log(err);
    song.plays += 1;
    song.save(callback);
  });
};

const updateCommentCount = (id, callback) => {
  Song.findOne({ id }, (err, song) => {
    if (err) console.log(err);
    song.comments += 1;
    song.save(callback);
  });
};

module.exports = {
  findSongById,
  updateLikeCount,
  updateRepostCount,
  updatePlayCount,
  updateCommentCount,
};

