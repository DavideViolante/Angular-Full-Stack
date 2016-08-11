import {Routes} from '@angular/router';

import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';

export const ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent }
];
