import { Injectable } from '@angular/core';

import { Cat } from '../shared/models/cat.model';
import { EntityService } from './base.service';

@Injectable()
export class CatService extends EntityService<Cat>{
  SingularAPI = 'cat';
  PluralAPI = 'cats';
}
