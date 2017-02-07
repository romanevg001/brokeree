import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  from: FormControl;

  constructor(private fb: FormBuilder) { 
    this.from = fb.control('');
    
    this.searchForm = fb.group({
      from: this.from
    });
  }

  ngOnInit() {
  }

}
