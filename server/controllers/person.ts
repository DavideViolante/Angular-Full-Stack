import Person from '../models/person';
import BaseCtrl from './base';

export default class PersonCtrl extends BaseCtrl {
  model = Person;
}
