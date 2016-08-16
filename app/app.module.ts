import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ROUTING} from './app.routes';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AboutComponent} from './about.component';
import {HomeComponent} from './home.component';

@NgModule({
    imports: [BrowserModule,
    		  ROUTING,
    		  HttpModule,
    		  FormsModule,
    		  ReactiveFormsModule],
    declarations: [AppComponent,
    			   AboutComponent,
    			   HomeComponent],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}