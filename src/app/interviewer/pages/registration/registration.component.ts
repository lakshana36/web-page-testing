import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import{HeaderComponent}from '../../../similar/ellipses/header/header.component';
import { Http } from '@angular/http';
import {InterviewerService} from '../../interviewer.service'
//import { Key } from 'protractor';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  text:'interviewer registration page';
  data_skill;
  // locationArray;
  skillArray;
    // data_location;
  i: number;
  registration_form: FormGroup;
  constructor(private reg:InterviewerService, private httpService:Http){
    this.skillArray=[];
    // this.locationArray=[];
    this.i=0;
    this.registration_form = new FormGroup({
      Name : new FormControl('', Validators.required),
      email: new FormControl('', Validators.pattern('^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.co.in')),
      mobileno : new FormControl('',Validators.pattern(/^[0-9]/)),
      Skills: new FormControl(''),
      Role:new FormControl('interviewer'),
      password : new FormControl('', Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/))
  })
  
}


  ngOnInit() {
    
    this.onUpdate();
  }
  onUpdate()
  {
    var data= this.reg.Iregistration();
    console.log(data);
    return data;
  }
  onUpdate1(){
    
    this.reg.Iregistration().subscribe((rsp)=>{
      this.data_skill=rsp.json();
     // console.log(this.data_skill);
      for(const key in this.data_skill){
 this.skillArray[this.i]=JSON.stringify(this.data_skill[key].skill);
 this.i++;}
      })}
      
      
  Register() {
    console.log(this.registration_form.value);

    // const postData = {

    // }
    const url = 'https://islot-39888.firebaseio.com/interview.json';
    this.httpService.post(url, this.registration_form.value)
      .subscribe(rsp => console.log(rsp));
    console.log('Posted');
  }
  clear(){
    this.registration_form.reset();
  }
}
