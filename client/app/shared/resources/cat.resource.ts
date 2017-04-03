import {Injectable} from '@angular/core';
import {Resource, ResourceParams, ResourceAction, ResourceMethodStrict} from 'ngx-resource';
import {ResourceMethod} from 'ngx-resource/src/Interfaces';
import {RequestMethod} from '@angular/http';

import {AppConfig} from '../../config/app.config';
import {ICat} from '../models/cat.model';

@Injectable()
@ResourceParams({
  url: AppConfig.API_ENDPOINT + '/cat'
})
export class CatResource extends Resource {

  @ResourceAction({
    method: RequestMethod.Post
  })
  save: ResourceMethod<ICat, ICat>;

  @ResourceAction({
    path: '/{!id}'
  })
  get: ResourceMethod<{id: any}, ICat>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: '/{!id}'
  })
  update: ResourceMethod<{id: any}, any>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: '/{!id}'
  })
  remove: ResourceMethod<{id: any}, any>;

}
