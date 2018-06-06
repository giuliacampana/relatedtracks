const request = require('supertest');
const app = require('../../server/server.js');

describe('Test GET /songs/:id', () => {
  test('it should send a response', (done) => {
    request(app).get('/songs/:id').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('it should send an array containg 0 or 1 song object', (done) => {
    request(app).get('/songs/:id').then((response) => {
      expect(response.body.length).toBeGreaterThanOrEqualTo(0);
      done();
    });
  });
});

