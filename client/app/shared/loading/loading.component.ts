import { Component, input, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
})
export class LoadingComponent {
  // input value when the component is used in a template
  condition = input<boolean>(false);
  // local writable signal the template reads from (public so tests can set it)
  localCondition = signal<boolean>(false);
  // public accessor used by templates to read the displayed message
  displayedCondition = () => this.localCondition();
  
  constructor() {
    // Keep local message in sync with any parent-provided input value
    effect(() => {
      this.localCondition.set(this.condition());
    });
  }

}
