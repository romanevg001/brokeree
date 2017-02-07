import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { AppSettings } from '../app.settings';
import { ApiUsersService } from '../user-services/api-users.service';
import { Ng2MapComponent } from 'ng2-map';
import { User } from './../user-list/user';




@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})

export class UserItemComponent implements OnInit {
  user: User;
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _apiUsersService:ApiUsersService
    ) { 
      Ng2MapComponent['apiUrl'] = 'https://maps.google.com/maps/api/js?key=' + AppSettings.googleApiKey
  }

  ngOnInit() {
    this._route.params
    .switchMap((params: Params) => this._apiUsersService.getUser(+params['id']))
    .subscribe((user) => {
      this.user = user;
    });

  }

}
