import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './core/components/main/app.component';
import { CatsComponent } from './cats/components/cats.component';
import { AboutComponent } from './about/components/about.component';

const routes: Routes = [
  { path: '', component: CatsComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
