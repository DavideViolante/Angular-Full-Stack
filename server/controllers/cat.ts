import Cat, { ICat } from '../models/cat';
import BaseCtrl from './base';

class CatCtrl extends BaseCtrl<ICat> {
  override model = Cat;
}

export default CatCtrl;
