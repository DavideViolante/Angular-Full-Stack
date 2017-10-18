import { Routes, RouterModule } from '@angular/router';
import { CatsComponent } from './cats.component';

const CAT_ROUTER: Routes = [
    {
        path: '',
        component: CatsComponent
    }
];

export const catRouter = RouterModule.forChild(CAT_ROUTER);
