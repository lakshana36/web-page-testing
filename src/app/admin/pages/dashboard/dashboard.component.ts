import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  charti :boolean;
  data: object;
  keys: Array<string>;
  recentEvents: Array<string>;
  upEvents: Array<string>;
  constructor(private httpService: Http,private router: Router) { 
    this.charti=true;
  }

  ngOnInit() {
    var url = 'https://islot-39888.firebaseio.com/islot/events.json';
    this.data = [];
    this.keys = [];
    this.recentEvents = [];
    this.upEvents = [];
    this.httpService.get(url).subscribe((rsp) => {
      if (rsp.json()) {
        this.data = rsp.json();
        this.keys = Object.keys(this.data);
        console.log(this.keys);
        this.divideEvents();
      }
    })
  }
  divideEvents() {
    const date = new Date();
    for (let i = 0; i < this.keys.length; i++) {
      if (new Date(this.data[this.keys[i]].eventDate) < date) {
        this.recentEvents.push(this.data[this.keys[i]].eventName);
      }
      else {
        this.upEvents.push(this.data[this.keys[i]].eventName);
      }
    }

  }
  redirect(event)
{

  sessionStorage.setItem("eventClick",event);
  this.router.navigateByUrl("/admin/home/view-event");
}

}
