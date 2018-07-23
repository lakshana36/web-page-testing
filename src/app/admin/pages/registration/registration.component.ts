import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventCreateService } from '../../admin.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  j: number;
  locationArray;
  data_location;
  
  registration_form: FormGroup;
  constructor(private reg:EventCreateService, private httpService:Http){
    
    this.locationArray=[];
  
    this.j=0;
    
    this.registration_form = new FormGroup({
      Name : new FormControl('', Validators.required),
      email: new FormControl('', Validators.pattern('^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com')),
      mobileno : new FormControl('',Validators.pattern(/^[0-9]/)),
      password : new FormControl('', Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)),
      Role:new FormControl('admin'),
      Location: new FormControl('')
  })
}

  
ngOnInit() {
    
  this.onUpdate();
}
onUpdate(){
  
  
    
    //console.log(this.skillArray);
  
    this.reg.getLocation().subscribe((rsp)=>{
      this.data_location=rsp.json();
     // console.log(this.data_location);
    for(const key in this.data_location){
this.locationArray[this.j]=JSON.stringify(this.data_location[key].location);
this.j++;
    }
    //console.log(this.locationArray);
    // this.skillData=this.data.skill;
    
    
    // console.log(this.data.slots[0].interviewers);
    })
}


onSubmit() {
  console.log(this.registration_form.value);

  // const postData = {

  // }
  const url = 'https://islot-39888.firebaseio.com/admin.json';
  this.httpService.post(url, this.registration_form.value)
    .subscribe(rsp => console.log(rsp));
  console.log('Posted');
}
onClear(){
  this.registration_form.reset();
}
}

