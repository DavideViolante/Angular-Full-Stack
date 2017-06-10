import * as express from 'express';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import Cat from './models/cat';
import User from './models/user';

export default function setRoutes(app) {

  // get an instance of the router for api routes
  const apiRoutes = express.Router();

  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();

  // Cats
  apiRoutes.route('/cats').get(catCtrl.getAll);
  apiRoutes.route('/cats/count').get(catCtrl.count);
  apiRoutes.route('/cat').post(catCtrl.insert);
  apiRoutes.route('/cat/:id').get(catCtrl.get);
  apiRoutes.route('/cat/:id').put(catCtrl.update);
  apiRoutes.route('/cat/:id').delete(catCtrl.delete);

  // Users
  apiRoutes.route('/login').post(userCtrl.login);
  apiRoutes.route('/users').get(userCtrl.getAll);
  apiRoutes.route('/users/count').get(userCtrl.count);
  apiRoutes.route('/user').post(userCtrl.insert);
  apiRoutes.route('/user/:id').get(userCtrl.get);
  apiRoutes.route('/user/:id').put(userCtrl.update);
  apiRoutes.route('/user/:id').delete(userCtrl.delete);

  // apply the routes to our application with the prefix /api
  app.use('/api', apiRoutes);

}
