import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';

export const routes = [
    { path: '',      component: HomeComponent },
    { path: 'about', component: AboutComponent }
];