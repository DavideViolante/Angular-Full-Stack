import * as express from 'express';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
function setRoutes(app) {
  const router = express.Router();
  const catCtrl = new CatCtrl(); 
  const userCtrl = new UserCtrl();
  
  // Cats
  router.route('/cats').get(catCtrl.getAll);
 
   // Users
   router.route('/login').post(userCtrl.login);
   router.route('/users').get(userCtrl.getAll);
   router.route('/user').post(userCtrl.insert);
   router.route('/user/:id').get(userCtrl.get);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}

export default setRoutes;