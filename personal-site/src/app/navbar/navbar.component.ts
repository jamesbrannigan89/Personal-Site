import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  information=[
    {
      name:'James Brannigan',
      title:'Support Engineer for SAP Success Factors',
      about:'I am a recent graduate in Software Development and am currently searching for a Graduate or Entry Level role. I have recently returned from six months travelling and am avaible immediately.',
      pageUrl:'/about'
    }
  ]

}
