import Cat from '../models/cats.server.model';
import BaseCtrl from '../../base.server.controller';

export default class CatsCtrl extends BaseCtrl {
  model = Cat;
}


