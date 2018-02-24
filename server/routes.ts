import * as express from 'express';

import PersonCtrl from './controllers/person';
import UserCtrl from './controllers/user';
import Person from './models/person';
import User from './models/user';
import WbsCtrl from './controllers/wbs';
import Wbs from './models/wbs';
import TypeCtrl from './controllers/type';
import Type from './models/type';
import DateendCtrl from './controllers/dateend';
import Dateend from './models/dateend';
import DateinitCtrl from './controllers/dateinit';
import Dateinit from './models/dateinit';
import CallIDCtrl from './models/call-id'
import CallID from './models/call-id';
import PriceCtrl from './controllers/price';
import Price from './models/price';



export default function setRoutes(app) {

  const router = express.Router();

  const personCtrl = new PersonCtrl();
  const typeCtrl = new TypeCtrl();
  const wbsCtrl = new WbsCtrl();
  const userCtrl = new UserCtrl();
  const dateendCtrl = new DateendCtrl();
  const dateinitCtrl = new DateinitCtrl();

  // Person
  router.route('/persons').get(personCtrl.getAll);
  router.route('/persons/count').get(personCtrl.count);
  router.route('/person').post(personCtrl.insert);
  router.route('/person/:id').get(personCtrl.get);
  router.route('/person/:id').put(personCtrl.update);
  router.route('/person/:id').delete(personCtrl.delete);


  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);


  // WBS
  router.route('/wbs').get(wbsCtrl.getAll);
  router.route('/wbs/count').get(wbsCtrl.count);
  router.route('/wbs').post(wbsCtrl.insert);
  router.route('/wbs/:id').get(wbsCtrl.get);
  router.route('/wbs/:id').put(wbsCtrl.update);
  router.route('/wbs/:id').delete(wbsCtrl.delete);

  //Type
  router.route('/types').get(typeCtrl.getAll);
  router.route('/types/count').get(typeCtrl.count);
  router.route('/type').post(typeCtrl.insert);
  router.route('/type/:id').get(typeCtrl.get);
  router.route('/type/:id').put(typeCtrl.update);
  router.route('/type/:id').delete(typeCtrl.delete);

  //Dateend
  router.route('/dateends').get(dateendCtrl.getAll);
  router.route('/dateends/count').get(dateendCtrl.count);
  router.route('/dateend').post(dateendCtrl.insert);
  router.route('/dateend/:id').get(dateendCtrl.get);
  router.route('/dateend/:id').put(dateendCtrl.update);
  router.route('/dateend/:id').delete(dateendCtrl.delete);

  //dateinit
  router.route('/dateinits').get(dateinitCtrl.getAll);
  router.route('/dateinits/count').get(dateinitCtrl.count);
  router.route('/dateinit').post(dateinitCtrl.insert);
  router.route('/dateinit/:id').get(dateinitCtrl.get);
  router.route('/dateinit/:id').put(dateinitCtrl.update);
  router.route('/dateinit/:id').delete(dateinitCtrl.delete);

  //CallID
  router.route('/callids').get(CallIDCtrl.getAll);
  router.route('/callids/count').get(CallIDCtrl.count);
  router.route('/callid').post(CallIDCtrl.insert);
  router.route('/callid/:id').get(CallIDCtrl.get);
  router.route('/callid/:id').put(CallIDCtrl.update);
  router.route('/callid/:id').delete(CallIDCtrl.delete);

  //dateinit - CHECK LATER

  /*router.route('/prices').get(PriceCtrl.getAll);
  router.route('/prices/count').get(PriceCtrl.count);
  router.route('/price').post(PriceCtrl.insert);
  router.route('/price/:id').get(PriceCtrl.get);
  router.route('/price/:id').put(PriceCtrl.update);
  router.route('/price/:id').delete(PriceCtrl.delete);*/

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
