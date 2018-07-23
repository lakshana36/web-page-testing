import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventCreateService } from '../../admin.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  eventClicked: string;
  data;
  keys;
  slots;
  contacts;
  constructor(private httpService:Http,private router:Router) {

  }
  redirect(link)
  {
    if(link=='view')
    this.router.navigateByUrl("/admin/home/view-event");
    else{
      this.router.navigateByUrl("/admin/home/update-event");
    }
  }
  ngOnInit() {
    var url='https://islot-39888.firebaseio.com/islot/events.json';
    this.data=[];
    this.eventClicked=sessionStorage.getItem("eventClick");
    this.httpService.get(url).subscribe((rsp) => {
      if(rsp.json())
      {
        this.data = rsp.json();
        this.keys=Object.keys(this.data);
        for(let i =0 ;i<this.keys.length;i++)
        {
            if(this.eventClicked==this.data[this.keys[i]].eventName)
              {
                this.slots=this.data[this.keys[i]].slots;
                // this.contacts=this.data[this.keys[i]].slots[event]
                console.log(this.slots);
                break;
              }
        }
      }
      
    });
    

  }
 

}
