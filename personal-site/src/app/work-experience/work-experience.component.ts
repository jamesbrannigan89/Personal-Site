import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  experience=[
    {
      intro:"Work Experience",
      title:"Technical Support",
      date:"March 2019 - July 2019",
      company:"Oracle",
      role:" As a technical support my main roles included troubleshooting and debugging software issues for Oracles Hotel Management Software Symphony.",
      task1:"Software Support",
      task2:"Troubleshooting",
      
    }

  ]

}
