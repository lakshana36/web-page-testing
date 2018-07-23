import { Component, OnInit, Input } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import {Http} from '@angular/http';
import { EventInterface } from "src/app/admin/pages/create-event/Icreate-event";
import { EventCreateService } from "src/app/admin/admin.service";
import * as moment from 'moment';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent  {
  postObj: EventInterface ;
  
 
  skillKeys: string[];
  keys: string[];
  title = 'app';
  idform : FormGroup;
  errMessage:string;
  data : any;
  locations : any;
  eventDetails : any;
  
  constructor(private EventCreate : EventCreateService) {
    this.idform = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z\s]+$/)]), 
      date:new FormControl('checkDate(date)'),
      startTime:new FormControl(''),
      endTime:new FormControl(''),
      location:new FormControl(''),
      skill:new FormControl('')

    }),
    this.onGetSkill();
    this.onGetLocation();
    
    
   }
     onStore(){
    console.log(this.idform.get('skill').value);
    var timeSlots=timeArray(this.idform.get('startTime').value,this.idform.get('endTime').value)
    
    this.postObj={
      //skill:this.idform.get('skill').value,
      eventEndTime:this.idform.get('endTime').value,
      eventStartTime:this.idform.get('startTime').value,
      eventLocation:this.idform.get('location').value,
      eventDate:this.idform.get('date').value,
      
      slots:[
        {
        id:"1",
        startTime:timeSlots[0],
        endTime:timeSlots[1],
        numberOfInterviwersEnrolled:[
          {
               userId: "",
               numberOfInterviewsTaken:"",
          }
        ]},
        {
        id:"2",
        startTime:timeSlots[1],
        endTime:timeSlots[2],
        numberOfInterviwersEnrolled:[
          {
               userId: "",
               numberOfInterviewsTaken:"",
          }
        ]
      
      },
      {
        id:"3",
        startTime:timeSlots[2],
        endTime:timeSlots[3],
        numberOfInterviwersEnrolled:[
          {
               userId: "",
               numberOfInterviewsTaken:"",
          }
        ]
      },
      {
        id:"4",
        startTime:timeSlots[3],
        endTime:this.idform.get('endTime').value,
        numberOfInterviwersEnrolled:[
          {
               userId: "",
               numberOfInterviewsTaken:"",
          }
        ]
      }
    ],
      eventName:this.idform.get('name').value,
    };
    function timeArray(start,end)
    {

      // console.log("in the time array");
      // console.log(start);
      // console.log(end);
      var start = start.split(':');
      var end = end.split(':');
      start = parseInt(start[0])*60 + parseInt(start[1]);

      end = parseInt(end[0]) * 60 + parseInt(end[1]);
      var difference=(end-start)/4;
      
      var diffresult=[];
      for(var i=start;i<end;i+=difference)
        {
          diffresult.push(timeDisplay(i));
        }
        return diffresult;
       
    }
    function timeDisplay(timeToDisplay)
    {
        //console.log("time to display");
        var hours=String(Math.floor(timeToDisplay/60));
        var minutes=String(timeToDisplay % 60);
         if(minutes < "10" ) {
           minutes = "0" + minutes;
         }
         return hours + ":" + minutes;

    }
 

    
    
  //   =[{
  //   //  this.eventDetails = this.idform.get("location").value;
  //   //  console.log(this.eventDetails);
  //   //  var location = this.idform.get('eventDetails').value;
  //     skill:this.idform.get('skill').value,
  //     name:this.idform.get('name').value,
  //     date : this.idform.get('date').value,
  //     startTime:this.idform.get('startTime').value,
  //     endTime:this.idform.get('endTime').value,
  //     location:this.idform.get("location").value,
      

  //   }
  // ]
  
     console.log(this.postObj);
     this.EventCreate.storeEventDetails(this.postObj)
     .subscribe(
       (response) => {
         console.log(response);
         this.idform.reset();
         
       

       },
       (error)=>console.log(error)
     );
   }
   onGetSkill(){
    this.EventCreate.getSkill()
    .subscribe(
      (response) =>{ 
        console.log(response.json());
        this.data=response.json();
        this.skillKeys=Object.keys(this.data);
      },
    (error) => console.log(error)
    );

   }
   onGetLocation(){
    this.EventCreate.getLocation()
    .subscribe(
      (response)=>{
        console.log(response.json());
        this.locations=response.json();
        this.keys=Object.keys(this.locations);
        
      },
      (error)=>console.log(error)
    );
   }
  

   checkDate (date : Date) {
    
  this.errMessage = '';
    var curDate = new Date();
    console.log(date);

   
    if(new Date(date) < curDate){
       this.errMessage = '*(Please enter proper date)';
       return false;
    }

}
}

