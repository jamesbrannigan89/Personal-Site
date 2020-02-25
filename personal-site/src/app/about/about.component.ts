import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  about=[
    {
      about:"About",
      description: "Hi Im James Brannigan. Currently I am a recent graduate looking for employment. I studied software development which included languages such as Java,HTML,CSS,Javascript. Right now I am currently learning Angular 8.",
      name:"James Brannigan",
      DOB:"12/11/93",
      email:"jamesbrannigan89@gmail.com",
      phoneNumber:"+353 876218446",
      address:" Circular Road Galway",
      languages:"English (Native Speaker), French (Beginner)"
    }
  ]
}
