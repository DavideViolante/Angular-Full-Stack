import {provideRouter, RouterConfig} from '@angular/router';

import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';

export const routes: RouterConfig = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent }
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];