import { AfterViewChecked, ChangeDetectorRef, Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})
export class AppComponent implements AfterViewChecked {
  auth = inject(AuthService);
  private changeDetector = inject(ChangeDetectorRef);


  // This fixes: https://github.com/DavideViolante/Angular-Full-Stack/issues/105
  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

}
