import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent implements OnInit {

  constructor() { }

  ngOnChanges(obj){
    console.log('ngOnChanges')
    console.log(obj)
  }
  ngOnInit() {

    
    
  }
  ngDoCheck(){
     console.log('ngDoCheck')
   
  }

  ngAfterContentInit(){
console.log(KINGDOM())
  }

}
