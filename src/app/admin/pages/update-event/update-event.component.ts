import { Component, OnInit, Output } from '@angular/core';
import { EventCreateService } from '../../admin.service';
import { EventEmitter } from 'events';

import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  @Output() myEvent=new EventEmitter();
  closeevent()
  {
    this.myEvent.emit(null);
  }
  data_update: any;
  updateArray: any;
  data;
  keys:Array<string>;
  j;
  updateInfo;

  interviewData;
  constructor(private update:EventCreateService) { 
    this.updateArray={};
    this.j=0;
  }

  ngOnInit() {
    this.onUpdate();
  }
  onUpdate(){
    this.update.updateEventFun().subscribe((rsp)=>{
    this.data=rsp.json();
    // console.log("updated",this.data);
    this.keys=Object.keys(this.data);
    console.log(this.data[this.keys[0]]);
    this.updateInfo=this.data[this.keys[0]];
      console.log(this.updateInfo[0].name);
    
    // for(const key in this.data_update){
    //   this.updateArray=JSON.stringify(this.data_update[key].name);
    //   this.j++;
    //   //console.log(this.updateArray);
    //   console.log("created",this.updateArray);

    // }
    
    })
      }


}
