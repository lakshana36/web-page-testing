import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  // v:string;
  // kavya:boolean;
  btsText1:string;
  registration_form: FormGroup;
  constructor(){
    this.btsText1="Update Profile";
    // this.kavya=false;
    this.registration_form = new FormGroup({
      Name : new FormControl('', Validators.required),
      email: new FormControl('', Validators.pattern('^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com')),
      update : new FormControl('',Validators.pattern(/^[0-9]/)),
      password : new FormControl('', Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/))
  })
}

  ngOnInit() {
  }

}
