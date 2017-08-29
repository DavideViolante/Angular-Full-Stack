process.env.NODE_ENV = 'test';

import * as chai from 'chai';
import * as chaiHttp from 'chai-http';
const should = chai.use(chaiHttp).should();

import { app } from '../app';

import Cat from '../models/cat.model';

describe('Cats', () => {

  beforeEach(done => {
    Cat.remove({}, err => {
      done();
    })
  });

  describe('/GET /api/cats', () => {
    it('it should get all the cats', done => {
      chai.request(app)
        .get('/api/cats')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        })
    });
  });

  describe('/GET /api/cats/count', () => {
    it('it should get cats count', done => {
      chai.request(app)
        .get('/api/cats/count')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('number');
          res.body.should.be.eql(0);
          done();
        })
    });
  });

  describe('/POST /api/cat', () => {
    it('it should create new cat', done => {
      let cat = {
        name: 'Fluffy',
        weight: 4,
        age: 2
      };
      chai.request(app)
        .post('/api/cat')
        .send(cat)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.a.property('name');
          res.body.should.have.a.property('weight');
          res.body.should.have.a.property('age');
          done();
        })
    })
  });

  describe('/GET /api/cat/:id', () => {
    it('it should get a cat by its id', done => {
      let cat = new Cat({name: 'Cat', weight: 2, age: 4});
      cat.save((err, cat) => {
        chai.request(app)
          .get(`/api/cat/${cat.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('name');
            res.body.should.have.property('weight');
            res.body.should.have.property('age');
            res.body.should.have.property('_id').eql(cat.id);
            done();
          })
      })
    })
  });

  describe('/PUT /api/cat/:id', () => {
    it('it should update a cat by its id', done => {
      let cat = new Cat({name: 'Cat', weight: 2, age: 4});
      cat.save((err, cat) => {
        chai.request(app)
          .put(`/api/cat/${cat.id}`)
          .send({weight: 5})
          .end((err, res) => {
            res.should.have.status(200);
            done();
          })
      })
    })
  });

  describe('/DELETE /api/cat/:id', () => {
    it('it should delete a cat by its id', done => {
      let cat = new Cat({name: 'Cat', weight: 2, age: 4});
      cat.save((err, cat) => {
        chai.request(app)
          .delete(`/api/cat/${cat.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          })
      })
    })
  });

});


