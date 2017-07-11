import * as express from 'express';
import * as jwt from 'express-jwt';
import * as dotenv from 'dotenv';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import Cat from './models/cat';
import User from './models/user';

export default function setRoutes(app) {

  const router = express.Router();
  const auth = jwt({
    secret: process.env.SECRET_TOKEN,
    userProperty: 'payload'
  });

  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();

  // Cats
  router.route('/cats').get(auth, catCtrl.getAll);
  router.route('/cats/count').get(auth, catCtrl.count);
  router.route('/cat').post(auth, catCtrl.insert);
  router.route('/cat/:id').get(auth, catCtrl.get);
  router.route('/cat/:id').put(auth, catCtrl.update);
  router.route('/cat/:id').delete(auth, catCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(auth, userCtrl.getAll);
  router.route('/users/count').get(auth, userCtrl.count);
  router.route('/user').post(userCtrl.register);
  router.route('/user/:id').get(auth, userCtrl.get);
  router.route('/user/:id').put(auth, userCtrl.update);
  router.route('/user/:id').delete(auth, userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
