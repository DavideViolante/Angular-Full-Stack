import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

const app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../../dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/test');
const db = mongoose.connection;

// Models
const catSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    age: Number
});
const Cat = mongoose.model('Cat', catSchema);

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


  // Serve the static Angular Files from the dist folder 
  app.use(express.static(path.join(__dirname, '/../dist')));

  app.listen(app.get('port'), () => {
    console.log('Angular 2 Full Stack listening on port ' + app.get('port'));
  });
});

export { app };
