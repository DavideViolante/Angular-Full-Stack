import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDERS} from './app.routes';

import 'rxjs/add/operator/map';

import {enableProdMode} from '@angular/core';
enableProdMode();

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, HTTP_PROVIDERS]).catch(err => console.error(err));