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
  company=[

    {

      backGroundImage:"/assets/images/sap.jpg ",
      title:"Cloud Success Plan Realization Operations",
      date:"April 2020 - Present",
      company:"SAP",
      role:" As a technical support my main roles included troubleshooting and debugging software issues for Oracles Hotel Management Software Symphony.",

      roles:[
        

      ]

    },

    {
      backGroundImage:"/assets/images/oracle.jpg ",
      title:"Technical Support",
      date:"March 2019 - July 2019",
      company:"Oracle",
      role:" As a technical support my main roles included troubleshooting and debugging software issues for Oracles Hotel Management Software Symphony.",

      roles:[
        "Software Support",
        "Configured hardware, devices and software to set up work stations for employees.",
        "Coordinated with systems partners to finalize designs and confirm requirements.",
        "Responded to support requests from end users and patiently walked individuals through basic troubleshooting tasks.",
        "Configured IP addresses for hardware products.",
        "Used SQL to solve issues on customers systems.",

      ]
     
      
    },

    {
      backGroundImage:"/assets/images/apple.jpg ",
      title:"Technical Support",
      date:"June 2018 - March 2019",
      company:"Apple",
      role:" As a technical support my main roles included troubleshooting and debugging software issues for Oracles Hotel Management Software Symphony.",

      roles:[
      "Explained technical information in clear terms to non-technical individuals to promote better understanding.",
      "Patched software and installed new versions to eliminate security problems and protect data.",
      "Responded to support requests from end users and patiently walked individuals through basic troubleshooting tasks.",
      "Increased sales by educating prospects on benefits of products and services in comparison to competitors.",
      "Configured IP addresses for hardware products.",
      "Created knowledge-based articles on issues and resolution encountered."

      ]
      
    },

    {
      backGroundImage:"/assets/images/medtronic.jpg ",
      title:"Production Operator",
      date:"August 2016 to December 2017",
      company:"Medtronic",
      role:"As a production operator in Medtronic I was responsible for ensuring the products were manufactured to the highest quality.",

      roles:[
        "Inspected final products for defects and flaws using proper QA procedures.",
        "Assisted engineers with the testing of the new machines via Kanban Cards."
      ]
    },


    {
      backGroundImage:"/assets/images/mocks.ie.png ",
      title:"Office Administrator",
      date:"August 2014 to September 2015",
      company:"Mocks.ie",
      role:"As office Admin I had various roles. I was originally hired to write Leaving Cert History notes, I then took on other roles such as working on Social media and assisting the developer finding UI bugs on the new website.",

      roles:[
        "Created Leaving Cert and Junior Cert Revision Material.",
        "Assisted with the Social Media Campaign on Facebook and Twitter.",
        "Tested the new website for any UI bugs such as broken links or incorrect information."
      ]

    }
  ]

  
 


}
