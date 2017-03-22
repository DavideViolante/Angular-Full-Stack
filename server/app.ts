import * as http from 'http';
import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import config from './config/db';
import Cat from './models/cat.model';
import setRoutes from './routes';

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
  setRoutes(app);

  var server = http.createServer(app);

  // app.listen(app.get('port'), () => {
	 //    console.log('Angular 2 Full Stack listening on port ' + app.get('port'));
  // });

  server.listen(app.get('port'), function(){
	  console.log("Angular 2 Full Stack listening on port " + app.get('port'));
  });
});

export { app };
