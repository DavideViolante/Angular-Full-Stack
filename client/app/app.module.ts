import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './core/components/main/app.component';
import { CatsComponent } from './cats/components/cats.component';
import { AboutComponent } from './about/components/about.component';
import { CatsDataService } from './cats/services/cats.data.service';


@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AboutComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    CatsDataService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
