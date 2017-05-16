import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  titlePage = 'MEAN project with Angular 4';
  constructor(private titleService: Title) {
    this.setTitle(this.titlePage);
  }
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
