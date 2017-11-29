import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Entity } from './base.service';
import { Cat } from '../shared/models/cat.model';

@Injectable()
export class CatService extends Entity<Cat> {
  SingularAPI = 'cat';
  PluralAPI = 'cats';
}
