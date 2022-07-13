import Cat, { ICat } from '../models/cat';
import BaseCtrl from './base';

class CatCtrl extends BaseCtrl<ICat> {
  constructor() {
    super(Cat, 'cat');
  }
}

export default CatCtrl;
