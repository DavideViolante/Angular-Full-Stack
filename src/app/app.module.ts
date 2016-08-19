import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AboutComponent} from './about.component';
import {HomeComponent} from './home.component';

import {enableProdMode} from '@angular/core';
enableProdMode();

const routing = RouterModule.forRoot([
    { path: '',      component: HomeComponent },
    { path: 'about', component: AboutComponent }
]);

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