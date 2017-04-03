import {Injectable} from '@angular/core';
import {Resource, ResourceParams, ResourceAction, ResourceMethodStrict} from 'ngx-resource';
import {ResourceMethod} from 'ngx-resource/src/Interfaces';
import {RequestMethod} from '@angular/http';

import {AppConfig} from '../../config/app.config';

interface ICat {
  id?: number;
  name?: string;
  weight?: number;
  age?: number;
}

@Injectable()
@ResourceParams({
  url: AppConfig.API_ENDPOINT + '/cats'
})
export class CatsResource extends Resource {

  @ResourceAction({
    isArray: true
  })
  query: ResourceMethod<{}, ICat[]>;

  @ResourceAction({
    path: '/count'
  })
  get: ResourceMethod<any, any>;

}
