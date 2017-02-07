import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  outputs: ['searchFormChange']
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  searchFormChange = new EventEmitter<FormGroup>();  
  from: FormControl;
  to: FormControl;
  instock: FormControl;
  priceFrom: FormControl;
  priceTo: FormControl;
  color: FormControl;
  colorList: ['Red', 'White', 'Black', 'Blue', 'Yellow', 'Green'];

  constructor(private fb: FormBuilder) { 
    this.from = fb.control('');
    this.to = fb.control('');
    this.instock = fb.control('');
    this.priceFrom = fb.control('');
    this.priceTo = fb.control('');
    this.color = fb.control('');

    this.searchForm = fb.group({
      from: this.from,
      to: this.to,
      instock: this.instock,
      priceFrom: this.priceFrom,
      priceTo: this.priceTo,
      color: this.color
    });

    this.searchForm.valueChanges
    .subscribe((newVal)=>{
      this.searchFormChange.emit(newVal);
    })
  }

  ngOnInit() {
  }

}
