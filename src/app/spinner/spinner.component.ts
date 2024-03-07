// spinner.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { fadeInOutAnimation } from '../animations';// Adjust the path accordingly

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  animations: [fadeInOutAnimation]
})
export class SpinnerComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/angular.jpg',
    };
    this.slides[1] = {
      src: './assets/img/react.jpg',
    }
    this.slides[2] = {
      src: './assets/img/vue.jpg',
    }
  }
}