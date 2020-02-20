const request = require('supertest')
const app = require('../server');

describe('GET /', () => {
    it('Response for first route', (done) => {
        request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            console.error(err)
            if (err) throw err
            done()
        })
    });
});