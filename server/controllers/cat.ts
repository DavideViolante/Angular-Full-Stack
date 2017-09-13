import Cat from '../models/cat';
import BaseCtrl from './base';

export default class CatCtrl extends BaseCtrl {
  model = Cat;
}
