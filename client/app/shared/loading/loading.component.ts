import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  standalone: false
})
export class LoadingComponent {
  @Input() condition = false;
}
