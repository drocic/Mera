import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css'],
  providers: [NgbCarouselConfig]
})
export class StaticComponent implements OnInit {

  images = [
    { title: '', short: '', src: "../../assets/img/resume.jpg"},
    { src: "../../assets/img/adaptacije.jpg"},
    { src: "../../assets/img/adaptacije2.JPG"}
  ];
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
   }

  ngOnInit(): void {
  }

}
