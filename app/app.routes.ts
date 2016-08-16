import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';

const ROUTES: Routes = [
	{ path: '', 		component: HomeComponent },
	{ path: 'about', 	component: AboutComponent }
];

export const ROUTING = RouterModule.forRoot(ROUTES);
