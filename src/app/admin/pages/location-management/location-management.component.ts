import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/Http';

@Component({
  selector: 'app-location-management',
  templateUrl: './location-management.component.html',
  styleUrls: ['./location-management.component.css']
})
export class LocationManagementComponent implements OnInit {

  data;
  id=0;
  keys=[];
  locations;
  constructor(private httpService:Http){
   
  }
  ngOnInit(){
    var url='https://islot-39888.firebaseio.com/locationmgnt.json';
    this.data=[];
  
    this.httpService.get(url).subscribe((rsp) => {
      if(rsp.json())
      {
        this.data = rsp.json();
        this.keys=Object.keys(this.data);
        console.log(this.keys[this.keys.length-1]);
      }
    })
  }
  addLocation(location)
  {
    if(this.data[this.keys[0]]!=undefined)
    {
      let len=this.keys.length-1;
      this.id=this.data[this.keys[len]].id+1
    }
    var url='https://islot-39888.firebaseio.com/locationmgnt.json'
    const newlocation={
      id:this.id,
      location: location.value
    }
    console.log(newlocation);
    this.httpService.post(url,JSON.stringify(newlocation)).subscribe(res=>{
      this.keys.push(res.json().name);
      this.data[res.json().name]=newlocation;
    });
    location.value='';
    
  }
    onDel(key){
    var url='https://islot-39888.firebaseio.com/locationmgnt';
    this.httpService.delete(url+"/"+key+".json").subscribe(res=>{
        let index=this.keys.indexOf(key);
        this.keys.splice(index,1);
    });

  }
  onUpdate(key,locationEdit){
    let index=this.keys.indexOf(key);
    var url='https://islot-39888.firebaseio.com/locationmgnt';
    this.httpService.patch(url+"/"+key+".json",JSON.stringify({
      location: locationEdit.value
    })).subscribe(res=>{
        console.log(res.json);
    });
  }
  

}
