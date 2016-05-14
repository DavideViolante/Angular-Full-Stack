import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Http, Headers, RequestOptions} from '@angular/http';
import {AboutComponent} from './about.component';
import {HomeComponent} from './home.component';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{ path: '/', name: 'Home', component: HomeComponent },
	{ path: '/about', name: 'About', component: AboutComponent }
])

export class AppComponent { }
