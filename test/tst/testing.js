/* global describe it */

process.env.NODE_ENV = 'test';

const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/server/index');

chai.should();

chai.use(chaiHttp);

describe('Api/Testing route', () => {
  describe('GET /api/testing', () => {
    it('200 TESTING PATH', (done) => {
      chai
        .request(server)
        .get('/api/testing')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          console.log(res.body);
          done();
        });
    });
  });

  describe('GET api/testing', () => {
    it('Content of the response', (done) => {
      chai
        .request(server)
        .get('/api/testing')
        .end((err, res) => {
          assert.equal('test', res.body.test);

          done();
        });
    });
  });
});
