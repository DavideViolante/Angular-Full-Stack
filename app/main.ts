import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AboutComponent} from './about.component';
import {HomeComponent} from './home.component';

import {enableProdMode} from '@angular/core';
enableProdMode();

// app.routes.ts
const routing = RouterModule.forRoot([
    { path: '',      component: HomeComponent },
    { path: 'about', component: AboutComponent }
]);
// ---

// app.module.ts
@NgModule({
    imports: [BrowserModule,
    		  routing,
    		  HttpModule,
    		  FormsModule,
    		  ReactiveFormsModule],
    declarations: [AppComponent,
    			   AboutComponent,
    			   HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
// ---

// main.ts
platformBrowserDynamic().bootstrapModule(AppModule);
// ---