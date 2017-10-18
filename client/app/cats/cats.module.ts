import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from './cats.component';
import { catRouter } from './cats.routing';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [CatsComponent],
    imports: [
        CommonModule,
        SharedModule,
        catRouter
    ]
})

export class CatsModule {}
