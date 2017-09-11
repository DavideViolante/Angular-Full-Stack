import * as express from 'express';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import Cat from './models/cat';
import User from './models/user';

export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();

  // Cats
  catCtrl.setRoutes(router);

  // Users
  userCtrl.setRoutes(router);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
