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
      welcomeMessage:"Welcome to my Personal Site",
      aboutSite:"I am a recent graduate in Software Development and I am looking to become a Web Developer. On this site you will find my personal projects,education and work experience",
      imageUrl:"/assets/images/me.jpg"
    }
  ]
}
