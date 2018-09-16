const request = require ('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
  
  describe('GET /', () => {
    it ('Should return Hello World message', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Hello World')
        .end(done);
    });
  });
  
  describe('GET /users', () => {
    it('Should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Daniel',
            age: 38
          });
        })
        .end(done);
    });
  });
});