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
      backGroundImage:"/assets/images/oracle.jpg ",
      title:"Technical Support",
      date:"March 2019 - July 2019",
      company:"Oracle",
      role:" As a technical support my main roles included troubleshooting and debugging software issues for Oracles Hotel Management Software Symphony.",
      task1:"Software Support",
      task2:"Configured hardware, devices and software to set up work stations for employees",
      task3:"Coordinated with systems partners to finalize designs and confirm requirements",
      task4:"Responded to support requests from end users and patiently walked individuals through basic troubleshooting tasks",
      task5:"Configured IP addresses for hardware products",
      task6:"Used SQL to solve issues on customers systems",
      
    },

    {
      backGroundImage:"/assets/images/apple.jpg ",
      title:"Technical Support",
      date:"June 2018 - March 2019",
      company:"Apple",
      role:" As a technical support my main roles included troubleshooting and debugging software issues for Oracles Hotel Management Software Symphony.",
      task1:"Explained technical information in clear terms to non-technical individuals to promote better understanding",
      task2:"Patched software and installed new versions to eliminate security problems and protect data",
      task3:"Responded to support requests from end users and patiently walked individuals through basic troubleshooting tasks",
      task4:"Increased sales by educating prospects on benefits of products and services in comparison to competitors",
      task5:"Configured IP addresses for hardware products",
      task6:"Created knowledge-based articles on issues and resolution encountered",
    }
  ]

}
