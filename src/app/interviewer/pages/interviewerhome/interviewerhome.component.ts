import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviewerhome',
  templateUrl: './interviewerhome.component.html',
  styleUrls: ['./interviewerhome.component.css']
})
export class InterviewerhomeComponent implements OnInit {
  btsText1:string;
 
  chart:boolean;
  constructor() { 
    this.btsText1="Interviewer Dashboard";
  
    this.chart=false;
  }

  ngOnInit() {
  }

}
