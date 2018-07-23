import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { element } from 'protractor';


@Component({
  selector: 'app-event-enrollment',
  templateUrl: './event-enrollment.component.html',
  styleUrls: ['./event-enrollment.component.css']
})
export class EventEnrollmentComponent implements OnInit {
  keysOfInterviewers: string[];
 eventClicked: string;
  data:object;
  interviewsTaken;
  keys:Array<string>;
  slots;
  defin;
data2;
  constructor(private httpService:Http) { }

  ngOnInit() {

    var url='https://islot-39888.firebaseio.com/islot/events.json';
    this.data=[];
    this.keys=[];
    
    this.httpService.get(url).subscribe((rsp) => {
      if(rsp.json())
      {
        this.data = rsp.json();
        this.keys=Object.keys(this.data);
        // console.log(this.data[this.keys[0]].slots[0]);
        console.log(this.data);
      
        for(let i =0 ;i<this.keys.length;i++)
        {
            if(this.eventClicked==this.data[this.keys[i]].eventName)
              {
                this.slots=this.data[this.keys[i]].slots;
                console.log(this.slots);
                // if(this.slots.numberOfInterviwersEnrolled.length){
                //     this.defin=true;
                // }
                
                break;
              }
        }
      }
      
    })
    this.eventClicked=sessionStorage.getItem("eventClick");
    console.log(this.eventClicked);

    
  }
  onEnter(interviewsTaken)
  {
    this.interviewsTaken=interviewsTaken.value;
  }
  // {
  //   "numberOfInterviwersEnrolled":{
  //     "numberOfInterviewsTaken": "1",
  //       "userId": "Test10"
  //   }
  //   }
  onChangeBox(event){
    const newInterviewer=	{

        numberOfInterviewsTaken: "1",
        userId:"test3"
        
  
      }
        
    
    let appendObj=[];
    var save;
   
    // for(let i=0;i<this.keys.length;i++)
    // {
    //     if(this.data[this.keys[i]].eventName==this.eventClicked && event.value=='on')
    //     {
    //       this.data2=this.data;
         // console.log(this.data2);

         // this.data2[this.keys[i]].slots[event.id-1].numberOfInterviwersEnrolled.push(newInterviewer);
          //data[this.keys[i]].slots[event.id-1].push(newInterviewer);
          // appendObj=data.numberOfInterviwersEnrolled;
         //     console.log(appendObj);
    //      save=i;
    //       }
         
    //   break;
    // }
    
    //this.keysOfInterviewers=Object.keys(this.slots[event.id-1].numberOfInterviwersEnrolled);
    //console.log(this.eventClicked+"qwerfqwerqwerwe  "+this.keys[save] +"  "+event.value);
    for(let i=0;i<this.keys.length;i++)
    {
        if(this.data[this.keys[i]].eventName==this.eventClicked && event.value=='on')
        {
          console.log("check in ");
          console.log(this.data[this.keys[i]].slots[event.id-1].numberOfInterviwersEnrolled.push(newInterviewer));
           this.data[this.keys[i]].slots[event.id-1];
          var url='https://islot-39888.firebaseio.com/islot/events/'+this.keys[i]+'/slots/'+(event.id-1)+'.json';
          this.httpService.patch(url,(this.data[this.keys[i]].slots[event.id-1])).subscribe(res=>{
          console.log(res.json()); 
          });
          break;
        }
       

    }
    
      

    
    

  }

}
