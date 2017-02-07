import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../app.settings';
import { User } from './../user-list/user';


@Injectable()
export class ApiUsersService {

    constructor(private _http:Http){
       
    }
   
    getUsers(): Observable<User[]>{
        return this._http.get(AppSettings.url + '/users')
        .map(e =>  e.json())
    }

    getUser(id): Observable<User>{
        return this._http.get(AppSettings.url + '/users/' + id)
        .map(e => e.json())
    }

}
