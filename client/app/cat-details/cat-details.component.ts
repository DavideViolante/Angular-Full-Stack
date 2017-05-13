import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.scss']
})
export class CatDetailsComponent implements OnInit {
  cat: any;
  isLoading = true;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => {
      return this.dataService.getCat(params['id']);
    })
      .subscribe((cat) => {
        let catParse = JSON.parse(cat._body);
        let pageTitle = catParse.name;
        this.setTitle(pageTitle);
        return this.cat = catParse;
      });

    this.isLoading = false;

  }




  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  goBack(): void {
    this.location.back();
  }

}
