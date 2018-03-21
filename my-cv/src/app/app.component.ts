import { Component, OnInit } from '@angular/core';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jennifer Wesselman';

  constructor(private UserSvc: UserService) {}

  ngOnInit() {
    this.UserSvc.List()
      .subscribe(users => {
        console.log(users);
      });
  }
}
