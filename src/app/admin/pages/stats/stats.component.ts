import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/Http';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  title = 'app';
  data:any;
  keys;
  events;
  pieChartOptions =  {
    chartType: 'PieChart',
    dataTable: [
      ['event', 'events per month'],
      ['angular',     50],
      ['react',      50],
     
    ],
    options: {'title': 'Tasks'},
  };
  constructor(private httpService:Http) {

   }

  ngOnInit() {
    var url='https://id-application-15904.firebaseio.com/eventTest.json';
    this.data=[];
    
    this.httpService.get(url).subscribe((rsp) => {
      if(rsp.json())
      {
        let event=new Array[this.keys.length];
        this.data = rsp.json();
        this.keys=Object.keys(this.data);
        
        // console.log(this.keys[this.keys.length-1]);
        for(let i=0;i<this.keys.length;i++)
          this.events[i]=this.data[this.keys[i]];
        
      }
    })
  }



}
