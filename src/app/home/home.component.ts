import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Skills } from '../skills';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rs : RestService) { }

  columns = ["ID","Skill Name","Skill Year Aquired","Skill Rating"];
  index = ["id","skillname", "skillyear", "skillrat"];

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
       }
     )

  }

}
