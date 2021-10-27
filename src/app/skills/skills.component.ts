import { Component, OnInit } from '@angular/core';
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

  skills : Skills[] = [];

  ngOnInit(): void {
    this.rs.getSkills().subscribe
     (
      
      /* (response) => {
         return console.log(response);
       }, */
       (response)=>
       {
         this.skills = response;
         console.log('vracamo response');
         /* console.log(this.skills.sort((a,b) => a.skillyear.rendered.localeCompare(b.skillyear.rendered)))
         response=response.filter(function(obj){
           console.log(obj.skillyear==="2011");
         }); */
       }
     )    

  }  
  Update(id:any){
    alert(id);

  }

  Delete(id:any){
    alert(id);
    console.log(this.skills);
    this.skills.forEach((e,i) => {
      if (e.id==id) {
        alert();
        this.skills.splice(i,1);
      }
    });
    console.log("posle");
    console.log(this.skills);
  }

}

