import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../shared/toast/toast.component';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user = {};
  isLoading = true;

  constructor(private auth: AuthService,
              public toast: ToastComponent,
              private dataService: DataService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.dataService.get('/api/user', this.auth.currentUser).subscribe(
      data => this.user = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  save(user) {
    this.dataService.put('/api/user', user).subscribe(
      res => this.toast.setMessage('Account settings saved.', 'success'),
      error => console.log(error)
    );
  }

}
