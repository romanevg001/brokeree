import { Component, OnInit } from '@angular/core';
import { ApiSearchService } from '../search-services/api-search.service';
import { Search } from '../search-services/search';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  searchList: Search[];

  constructor(private _apiSearchService: ApiSearchService) { }

  ngOnInit() {
    this._apiSearchService.getSearchList()
    .subscribe((searchList)=>{
        this.searchList = searchList;
    })
  }

}
