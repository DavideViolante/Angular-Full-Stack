import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AboutComponent} from './about.component';
import {HomeComponent} from './home.component';
import {DataResolver} from './data-resolver.service';

import {enableProdMode} from '@angular/core';
enableProdMode();

// app.routes.ts
const ROUTES: Routes = [
    { path: '',      component: HomeComponent, resolve: { catsData: DataResolver } },
    { path: 'about', component: AboutComponent }
];

// app.module.ts
@NgModule({
    imports: [BrowserModule,
    		  RouterModule.forRoot(ROUTES),
    		  HttpModule,
    		  FormsModule,
    		  ReactiveFormsModule],
    declarations: [AppComponent,
    			   AboutComponent,
    			   HomeComponent],
    providers: [DataResolver],
    bootstrap: [AppComponent]
})
export class AppModule {}

// main.ts
platformBrowserDynamic().bootstrapModule(AppModule);