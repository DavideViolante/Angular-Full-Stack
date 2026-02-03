import { AfterViewChecked, ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { AuthService } from './services/auth.service';
import { ToastComponent } from './shared/toast/toast.component';
import { LoadingComponent } from './shared/loading/loading.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  providers: [AuthService, ToastComponent, LoadingComponent],
  templateUrl: './app.html',
})
export class App implements AfterViewChecked {
  auth = inject(AuthService);
  private changeDetector = inject(ChangeDetectorRef);

  // This fixes: https://github.com/DavideViolante/Angular-Full-Stack/issues/105
  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

}
