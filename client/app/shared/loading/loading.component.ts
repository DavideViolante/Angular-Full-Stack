import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  imports: [CommonModule],
  templateUrl: './loading.component.html',
})
export class LoadingComponent {
  condition = input<boolean>(false);
  displayedCondition = computed(() => this.condition());
}
