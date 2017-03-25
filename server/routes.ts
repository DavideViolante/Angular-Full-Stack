import * as express from 'express';

import CatsCtrl from './controllers/cats';
import Cat from './models/cat.model';

export default function setRoutes(app) {

  const cats = new CatsCtrl();

  // APIs
  app.route('/api/cats').get(cats.getAll);
  app.route('/api/cats/count').get(cats.count);
  app.route('/api/cat').post(cats.insert);
  app.route('/api/cat/:id').get(cats.get);
  app.route('/api/cat/:id').put(cats.update);
  app.route('/api/cat/:id').delete(cats.delete);

}
