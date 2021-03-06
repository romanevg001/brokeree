import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiUsersService } from '../user-services/api-users.service';
import { User } from './user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private _apiUsersService:ApiUsersService) {
      
   }

  ngOnInit():void {   
    this._apiUsersService.getUsers()
      .subscribe((users)=>{
        this.users = users
      })
  }


}
