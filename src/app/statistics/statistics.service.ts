import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../app.settings';

@Injectable()
export class StatisticsService {

   constructor(private _http:Http){
       
    }
   
    getPosts(): Observable<any[]>{
        return this._http.get(AppSettings.url + '/posts')
        .map(e => e.json())
    }


}

