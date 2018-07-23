import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/Http';

@Component({
  selector: 'app-skill-management',
  templateUrl: './skill-management.component.html',
  styleUrls: ['./skill-management.component.css']
})
export class SkillManagementComponent implements OnInit {

  data=[];
  id=0;
  keys=[];
  skills;
  constructor(private httpService:Http){
   
  }
  ngOnInit(){
    var url='https://islot-39888.firebaseio.com/skillmgnt.json';
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
  addSkill(skill)
  {
    if(this.data[this.keys[0]]!=undefined)
    {
      let len=this.keys.length-1;
      this.id=this.data[this.keys[len]].id+1
    }
    var url='https://islot-39888.firebaseio.com/skillmgnt.json'
    const newSkill={
      id:this.id,
      skill: skill.value
    }
    console.log(newSkill);
    this.httpService.post(url,JSON.stringify(newSkill)).subscribe(res=>{
      this.keys.push(res.json().name);
      this.data[res.json().name]=newSkill;
    });
    skill.value='';
    
  }
    onDel(key){
    var url='https://islot-39888.firebaseio.com/skillmgnt';
    this.httpService.delete(url+"/"+key+".json").subscribe(res=>{
        let index=this.keys.indexOf(key);
        this.keys.splice(index,1);
    });

  }
  onUpdate(key,skillEdit){
    let index=this.keys.indexOf(key);
    var url='https://islot-39888.firebaseio.com/skillmgnt';
    this.httpService.patch(url+"/"+key+".json",JSON.stringify({
      skill: skillEdit.value
    })).subscribe(res=>{
        console.log(res.json);
    });
  }
  

}
