//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');

chai.should();
chai.use(chaiHttp);

describe('/hello api call', () => {
    it('it should return a status 200', (done) => {
        chai.request(server)
            .get('/hello')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});