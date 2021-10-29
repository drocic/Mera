import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Skills } from '../skills';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rs : RestService) { }

  columns = ["Skill Name","Skill Year Aquired","Skill Rating"];
  index = ["skillname", "skillyear", "skillrat"];

  skills : Skills[] = [];
  count : number = 0;
  minyear : number  = 9999;
  maxyear : number = 0;
  arr : Array<[string,number]> = [];

  ngOnInit(): void {
    this.rs.getSkills().subscribe
     (
       (response)=>
       {
          this.skills = response;
          this.skills.forEach(c => {
            if(Number(c.skillyear) < this.minyear ) {
              this.minyear=Number(c.skillyear);            
            }
          });        
          this.skills.forEach(c => {
            if(Number(c.skillyear) > this.maxyear) {
              this.maxyear=Number(c.skillyear);            
            }
          });
          for ( let j = this.minyear ; j <= this.maxyear ; j++ ) {
            this.skills.forEach(c => {
              if(Number(c.skillyear) == j) { this.count++;}
            });
            
            this.arr.push([String(j),this.count]);

          }
       }
     );
     
     
  }

  
  
  chartData = {
    type: ChartType.LineChart,
    data: this.arr,
 columnNames: ["Year", "Skills Aquired"],
 options: {
 hAxis: {
       title: 'Year'
    },
    vAxis:{
       title: 'Skill'
    },
 },
 width: 500,
 height: 300
};

}

