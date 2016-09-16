var express = require('express');
var morgan = require('morgan'); // logger
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/../node_modules'));
app.use('/bundle', express.static(__dirname + '/bundle'));
app.use('/app', express.static(__dirname + '/app'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
mongoose.Promise = global.Promise;

// Models
var Cat = require('./cat.model.js');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');

    // select all
    app.get('/cats', (req, res) => {
        Cat.find({}, (err, docs) => {
            if(err) return console.error(err);
            res.json(docs);
        });
    });

    // count all
    app.get('/cats/count', (req, res) => {
        Cat.count((err, count) => {
            if(err) return console.error(err);
            res.json(count);
        });
    });

    // create
    app.post('/cat', (req, res) => {
        var obj = new Cat(req.body);
        obj.save((err, obj) => {
            if(err) return console.error(err);
            res.status(200).json(obj);
        });
    });

    // find by id
    app.get('/cat/:id', (req, res) => {
        Cat.findOne({_id: req.params.id},  (err, obj) => {
            if(err) return console.error(err);
            res.json(obj);
        })
    });

    // update by id
    app.put('/cat/:id', (req, res) => {
        Cat.findOneAndUpdate({_id: req.params.id}, req.body, (err) => {
            if(err) return console.error(err);
            res.sendStatus(200);
        })
    });

    // delete by id
    app.delete('/cat/:id', (req, res) => {
        Cat.findOneAndRemove({_id: req.params.id}, (err) => {
            if(err) return console.error(err);
            res.sendStatus(200);
        });
    });


    // all other routes are handled by Angular
    app.get('/*', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });

    app.listen(app.get('port'), () => {
        console.log('MEAN app listening on port '+app.get('port'));
    });
});


