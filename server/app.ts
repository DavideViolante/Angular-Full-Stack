import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import { join as pathJoin } from 'path';

import { connectToMongo } from './mongo';
import setRoutes from './routes';

const app = express();
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(pathJoin(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

setRoutes(app);

const main = async (): Promise<void> => {
  try {
    await connectToMongo();
    app.get('/*', (req, res) => {
      res.sendFile(pathJoin(__dirname, '../public/index.html'));
    });
    app.listen(app.get('port'), () => console.log(`Angular Full Stack listening on port ${app.get('port')}`));
  } catch (err) {
    console.error(err);
  }
};

if (process.env.NODE_ENV !== 'test') {
  main();
}

export { app };
