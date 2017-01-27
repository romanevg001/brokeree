import { Component, OnInit } from '@angular/core';
import { StatisticsService } from './statistics.service';



@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  frequencies = {};
  frequenciesLetters = {};
   pieChartOptions:any;
   columnChartOptions:any;
   scatterChartOptions:any;
   pieChartLetterOptions:any;
   

  constructor(private _statisticsService: StatisticsService) { }
 
  ngOnInit() {
    this._statisticsService.getPosts()
    .subscribe((posts)=>{

      //count of words and lettrs
        posts.forEach(element => {
          this.getFrequency(element.body);
          this.getFrequencyLetters(element.body);
        });

       // pie chart statistics
        this.pieChartOptions =  {
          chartType: 'PieChart',
          dataTable: this.generateChartData(),
           options: {
              title: 'Statistics of words',
              animation: {easing: 'out'},
              height: 500,
              pieHole: 0.4
          }
        };

       // columns chart statistics
        this.columnChartOptions =  {
          chartType: 'ColumnChart',
          dataTable:   this.generateChartData(this.frequenciesLetters),
          options: {title: 'Statistics of letters'}
        };
        
        //ScatterChart
        this.scatterChartOptions =  {
          chartType: 'ScatterChart',
          dataTable: this.generateChartData(),
           options: {
              title: 'Statistics of words',
              animation: {easing: 'out'},
              height: 500,
           
          }
        };

        // pie chart statistics
        this.pieChartLetterOptions =  {
          chartType: 'PieChart',
          dataTable:   this.generateChartData(this.frequenciesLetters),
           options: {
              title: 'Statistics of letters',
              animation: {easing: 'out'},
              height: 500,
              pieHole: 0.4
          }
        };
        

    })        

  }


  generateChartData(frequencies = this.frequencies){
    let data = []
    for(let fr in frequencies){
      data.push([fr, frequencies[fr]])
    }
    data.sort();
    data.unshift(['',''])
    return data;
    
  }

  getFrequency(string) {
      var cleanString = string.replace(/[\n\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""),
          words = cleanString.split(' '),
          word, i;

      for( i=0; i<words.length; i++ ) {
        word = words[i];
        this.frequencies[word] = this.frequencies[word] || 0;
        this.frequencies[word]++;
      }
  }
  getFrequencyLetters(string) {
      var cleanString = string.replace(/[\s\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""),
          words = cleanString.split(''),
          word, i;
      for( i=0; i<words.length; i++ ) {
        word = words[i];
        this.frequenciesLetters[word] = this.frequenciesLetters[word] || 0;
        this.frequenciesLetters[word]++;
      }
  }

}
