import { AfterViewChecked, ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { AuthService } from './services/auth.service';
import { ToastService } from './shared/toast/toast.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  providers: [ToastService],
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
