import * as chai from 'chai';
import * as chaiHttp from 'chai-http';

process.env.NODE_ENV = 'test';
import { app } from '../app';
import userModel from '../models/userModel';

const should = chai.use(chaiHttp).should();

describe('users', () => {

  beforeEach((done) => {
    userModel.remove({}, (err) => {
      done();
    });
  });

  describe('Backend tests for users', () => {

    it('should get all the users', (done) => {
      chai.request(app)
        .get('/api/users')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });

    it('should get users count', (done) => {
      chai.request(app)
        .get('/api/users/count')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('number');
          res.body.should.be.eql(0);
          done();
        });
    });

    it('should create new user', (done) => {
      const newUser = new userModel({ username: 'Dave', email: 'dave@example.com', role: 'user' });
      chai.request(app)
        .post('/api/user')
        .send(newUser)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.a.property('username');
          res.body.should.have.a.property('email');
          res.body.should.have.a.property('role');
          done();
        });
    });

    it('should get a user by its id', (done) => {
      const newUser = new userModel({ username: 'user', email: 'user@example.com', role: 'user' });
      newUser.save((error, newuser) => {
        chai.request(app)
          .get(`/api/user/${newuser.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('username');
            res.body.should.have.property('email');
            res.body.should.have.property('role');
            res.body.should.have.property('_id').eql(newuser.id);
            done();
          });
      });
    });

    it('should update a user by its id', (done) => {
      const newUser = new userModel({ username: 'user', email: 'user@example.com', role: 'user' });
      newUser.save((error, newuser) => {
        chai.request(app)
          .put(`/api/user/${newuser.id}`)
          .send({ username: 'user 2' })
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });

    it('should delete a user by its _id', (done) => {
      const newUser = new userModel({ username: 'user', email: 'user@example.com', role: 'user' });
      newUser.save((error, newuser) => {
        chai.request(app)
          .delete(`/api/user/${newuser.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });
  });

});


