const mongoose = require('mongoose');
const data = require('../data.json');

mongoose.connect('mongodb://localhost/tunestorm');

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

const seedDatabase = (songs, callback) => {
  const songData = JSON.parse(songs);

  const songstoAdd = songData.map((song) => {
    return {
      id: song.id,
      artist: song.artist,
      title: song.title,
      plays: song.plays,
      likes: song.likes,
      reposts: song.reposts,
      comments: song.comments,
      related_tracks: song.relatedTracks,
    };
  });

  Song.insertMany(songsToAdd, callback);
};

// seedDatabase(data, (err, results) => {
//   if (err) console.log(err);
//   else console.log('success', results);
// });
