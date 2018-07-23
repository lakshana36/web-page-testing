import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InterviewerService {

  eventClicked : String;
  constructor(private httpService:Http) {
  }
 Iregistration(){
  return this.httpService.get('https://islot-39888.firebaseio.com/skillmgnt.json');
 }
 Ilocation(){
  return this.httpService.get('https://islot-39888.firebaseio.com/locationmgnt.json'); 
}
  setEvent()
  {
      
  }
   




}



  
  

