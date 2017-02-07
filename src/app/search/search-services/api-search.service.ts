import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../app.settings';
import { Search } from './search';


@Injectable()
export class ApiSearchService {

    constructor(private _http:Http){
       
    }
   
    getSearchList(): Observable<Search[]>{
        return this._http.get('/search.data.json')
        .map(e =>  e.json().search)
    }

   

}
