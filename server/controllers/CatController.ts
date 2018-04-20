import catModel from '../models/catModel';
import BaseController from './BaseController';

export default class CatController extends BaseController {
  model = catModel;
}
