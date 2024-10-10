import Cat, { ICat } from '../models/cat';
import BaseCtrl from './base';

class CatCtrl extends BaseCtrl<ICat> {
  model = Cat;
}

export default CatCtrl;
