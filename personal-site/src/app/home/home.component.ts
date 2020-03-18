import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  information=[
    {
      name:'James Brannigan',
      title:'Graduate Developer - Interested in becoming a Front end',
      about:'I am a recent graduate in Software Development and am currently searching for a Graduate or Entry Level role. I have recently returned from six months travelling and am avaible immediately.',
      pageUrl:'/about'
    }

  ]
}
