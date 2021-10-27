import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Skills } from '../skills';
import { ChartType } from 'angular-google-charts';
import { GraphData } from '../graph';

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
  graph : GraphData[] = [];
  count : number = 0;

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
  chartData = {
    type: ChartType.LineChart,
    data: [
    ["2011",  5],
    ["2007",  800],
    ["2008",  400],
    ["2010",  600],
    ["May",  400],
    ["Jun",  750],
    ["Jul",  800],
    ["Aug",  810],
    ["Sep",  820],
    ["Oct",  900],
    ["Nov",  910],
    ["Dec",  920]
 ],
 columnNames: ["Year", "Skills Aquired"],
 options: {
 hAxis: {
       title: 'Year'
    },
    vAxis:{
       title: 'Skill'
    },
 },
 width: 1000,
 height: 400
};

}

