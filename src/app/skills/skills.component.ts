import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RestService } from '../rest.service';
import { Skills } from '../skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private rs : RestService) { }

  columns = ["Skill Name","Skill Year Aquired","Skill Rating","CTA"];
  index = ["skillname", "skillyear", "skillrat"];
  @ViewChild('updateform') updateform!: ElementRef;
  @ViewChild('SkillNameInput') skillnameinput!: ElementRef;
  @ViewChild('SkillYearInput') skillyearinput!: ElementRef;
  @ViewChild('SkillRatingInput') skillratinginput!: ElementRef;
  skillID: string = "";

  skills : Skills[] = [];

  ngOnInit(): void {
    this.rs.getSkills().subscribe
     (
       (response)=>
       {
         this.skills = response;
         console.log('vracamo response');
       }
     )    

  }  
  Update(id:any){  
    
    this.updateform.nativeElement.removeAttribute('disabled');
    this.skills.forEach((e,i) => {
      if (e.id==id) {
        this.skillnameinput.nativeElement.value=e.skillname;
        this.skillyearinput.nativeElement.value=e.skillyear;
        this.skillratinginput.nativeElement.value=e.skillrat;
        this.skillID=e.id;
        console.log(this.skillID);
      }
    });
    
  }
  Delete(id:any){
    /* console.log(this.skills);
    this.skills.forEach((e,i) => {
      if (e.id==id) {
        this.skills.splice(i,1);
      }
    }); */
    const axios = require('axios');
    axios.delete('http://localhost:3000/Skills/'+id+'/').then(this.skills.forEach((e,i) => {
      if (e.id==id) {
        this.skills.splice(i,1);
      }
    }));
    console.log("posle");
    console.log(this.skills);
    
    /* this.rs.getSkills().subscribe
     (
       (response)=>
       {
         this.skills = response;
         console.log('vracamo response');
       }
     )  */
  }

  AddRecord() {
    this.updateform.nativeElement.removeAttribute('disabled');
    this.skillnameinput.nativeElement.setAttribute("placeholder","Enter name");
    this.skillyearinput.nativeElement.setAttribute("placeholder","Enter year");
    this.skillratinginput.nativeElement.setAttribute("placeholder","Enter skill rating");
  }

  Submit() {
    if (this.skillID != "") {
      const axios = require('axios');

axios.put('http://localhost:3000/Skills/'+this.skillID+'/', {
    skillname: this.skillnameinput.nativeElement.value,
    skillyear: this.skillyearinput.nativeElement.value,
    skillrat: this.skillratinginput.nativeElement.value
}).then(/* this.skills.forEach((e,i) => {
  if (e.id==this.skillID) {
    e.skillname=this.skillnameinput.nativeElement.value;
    e.skillyear=this.skillyearinput.nativeElement.value;
    e.skillrat=this.skillratinginput.nativeElement.value;
  }
}) */location.reload());
    } else {
      const axios = require('axios');
      let max = 0;
      this.skills.forEach(c => {
        if(Number(c.id) > max) {
          max=Number(c.id);
        }
      });
      max++;
      axios.post('http://localhost:3000/Skills', {
        id: max,
        skillname: this.skillnameinput.nativeElement.value,
        skillyear: this.skillyearinput.nativeElement.value,
        skillrat: this.skillratinginput.nativeElement.value
}).then(location.reload());

    }

  }

  

}

