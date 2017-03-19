import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import config from './config/db'
import Cat from './models/cat.model'

const app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../../dist/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

mongoose.connect(config.url);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  // APIs
  // select all
  app.get('/cats', (req, res) => {
    Cat.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      res.json(docs);
    });
  });

  // count all
  app.get('/cats/count', (req, res) => {
    Cat.count((err, count) => {
      if (err) { return console.error(err); }
      res.json(count);
    });
  });

  // create
  app.post('/cat', (req, res) => {
    const obj = new Cat(req.body);
    obj.save((err, cat) => {
      if (err) { return console.error(err); }
      res.status(200).json(cat);
    });
  });

  // find by id
  app.get('/cat/:id', (req, res) => {
    Cat.findOne({_id: req.params.id}, (err, obj) => {
      if (err) { return console.error(err); }
      res.json(obj);
    });
  });

  // update by id
  app.put('/cat/:id', (req, res) => {
    Cat.findOneAndUpdate({_id: req.params.id}, req.body, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
  });

  // delete by id
  app.delete('/cat/:id', (req, res) => {
    Cat.findOneAndRemove({_id: req.params.id}, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
  });

  app.listen(app.get('port'), () => {
    console.log('Angular 2 Full Stack listening on port ' + app.get('port'));
  });
});

export { app };
