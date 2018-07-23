import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  btsText:string;
  charti :boolean;
  constructor() { 
    this.btsText = "Admin Dashboard";
    this.charti=true;
  }

  ngOnInit() {
  }

}
