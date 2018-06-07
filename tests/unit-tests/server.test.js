const request = require('supertest');
const app = require('../../server/app.js');

describe('Test GET /', () => {
  test('It should respond with a status code', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('It should serve index.html', (done) => {
    request(app).get('/').then((response) => {
      expect(response.type).toBe('text/html');
      done();
    });
  });
});

describe('Test GET /songs/:id', () => {
  test('it should send a response', (done) => {
    request(app).get('/songs/1').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('It should send all info related to a song', (done) => {
    request(app).get('/songs/1').then((response) => {
      expect(response.body.length).toBe(1);
      done();
    });
  });

  test('It should send the artist\'s name', (done) => {
    request(app).get('/songs/1').then((response) => {
      expect(typeof response.body[0].artist).toBe('string');
      done();
    });
  });

  test('It should send the song\'s title', (done) => {
    request(app).get('/songs/1').then((response) => {
      expect(typeof response.body[0].title).toBe('string');
      done();
    });
  });

  test('It should send the artist\'s name', (done) => {
    request(app).get('/songs/1').then((response) => {
      expect(typeof response.body[0].artist).toBe('string');
      done();
    });
  });

  test('It should send the play count', (done) => {
    request(app).get('/songs/1').then((response) => {
      expect(typeof response.body[0].plays).toBe('number');
      done();
    });
  });

  test('It should send the like count', (done) => {
    request(app).get('/songs/1').then((response) => {
      expect(typeof response.body[0].likes).toBe('number');
      done();
    });
  });

  test('It should send the repost count', (done) => {
    request(app).get('/songs/1').then((response) => {
      expect(typeof response.body[0].reposts).toBe('number');
      done();
    });
  });

  test('It should send the comment count', (done) => {
    request(app).get('/songs/1').then((response) => {
      expect(typeof response.body[0].comments).toBe('number');
      done();
    });
  });

  test('It should send an array of IDs for related tracks', (done) => {
    request(app).get('/songs/1').then((response) => {
      expect(Array.isArray(response.body[0].relatedTracks)).toBe(true);
      done();
    });
  });

  test('It should send array of related tracks of length 3', (done) => {
    request(app).get('/songs/1').then((response) => {
      expect(response.body[0].relatedTracks.length).toBe(3);
      done();
    });
  });
});

