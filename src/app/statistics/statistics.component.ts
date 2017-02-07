import { Component, OnInit } from '@angular/core';
import { StatisticsService } from './statistics.service';



@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
   pieChartOptions:any;
   columnChartOptions:any;
   scatterChartOptions:any;
   pieChartLetterOptions:any;
   

  constructor(private _statisticsService: StatisticsService) { }
 
  ngOnInit() {
    var getFrequencyWords = this.getFrequencyWords()
    var getFrequencyLetters = this.getFrequencyLetters()
    
    this._statisticsService.getPosts()
    .subscribe((posts)=>{

      //count of words and lettrs
        posts.forEach(element => {
          getFrequencyWords(element.body);
         getFrequencyLetters(element.body);
        });


       // pie chart statistics
        this.pieChartOptions =  {
          chartType: 'PieChart',
          dataTable: this.generateChartData(getFrequencyWords()),
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
          dataTable:   this.generateChartData(getFrequencyLetters()),
          options: {title: 'Statistics of letters'}
        };
        
        //ScatterChart
        this.scatterChartOptions =  {
          chartType: 'ScatterChart',
          dataTable: this.generateChartData(getFrequencyWords()),
           options: {
              title: 'Statistics of words',
              animation: {easing: 'out'},
              height: 500,
           
          }
        };

        // pie chart statistics
        this.pieChartLetterOptions =  {
          chartType: 'PieChart',
          dataTable:   this.generateChartData(getFrequencyLetters()),
           options: {
              title: 'Statistics of letters',
              animation: {easing: 'out'},
              height: 500,
              pieHole: 0.4
          }
        };
        

    })        

  }


  generateChartData(frequencies){
    let data = []
    let dd = [];

    dd.push([...frequencies])
console.log(dd)

    for(let fr in frequencies){
      data.push([fr, frequencies[fr]])
    }
    data.sort();
    data.unshift(['',''])
    return data;
    
  }

  getFrequencyWords() {
    var frequencies = {};

    return (string?: string) => {
      if(string == undefined) return frequencies;
      
        var cleanString = string.replace(/[\n\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""),
            words = cleanString.split(' '),
            word, i;

        frequencies = this._getFrequency(frequencies, words);

        return frequencies;
    }
  }

  getFrequencyLetters() {
    var frequencies = {};

    return (string?: string) => {
      if(string == undefined) return frequencies;

      var cleanString = string.replace(/[\s\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""),
          words = cleanString.split('');

      frequencies = this._getFrequency(frequencies, words);
      
      return frequencies;
    }
  }

  _getFrequency(frequencies, words) {
      var word, i;
      for(i=0; i<words.length; i++ ) {
          word = words[i];
          frequencies[word] = frequencies[word] || 0;
          frequencies[word]++;
      }
      return frequencies;
  }
  

}
