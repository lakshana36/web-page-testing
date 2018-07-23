import {Injectable} from "@angular/core";

import {Http} from "@angular/http";

@Injectable()
export class EventCreateService{
    // id : number;
    // skill:string;
    // skillMap : any;
     constructor(private httpService : Http)
     {}
   getSkill()
   {
       return this.httpService.get('https://islot-39888.firebaseio.com/skillmgnt.json');
   }
   getLocation()
   {
       return this.httpService.get('https://islot-39888.firebaseio.com/locationmgnt.json');
   }
   storeEventDetails(eventInfo : any)
   {
      return  this.httpService.post('https://islot-39888.firebaseio.com/islot/events.json',eventInfo);
   }
   updateEventFun(){
    return this.httpService.get('https://islot-39888.firebaseio.com/dummyUpdate.json');
   }
   viewEvent()
   {
       return   this.httpService.get('https://islot-39888.firebaseio.com/islot/events.json');
   }
   

} 

