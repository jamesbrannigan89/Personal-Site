import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college-experience',
  templateUrl: './college-experience.component.html',
  styleUrls: ['./college-experience.component.css']
})
export class CollegeExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  experience=[
    {
      name:"Galway-Mayo Institute of Technology",
      course:"Higher Diploma in Software Development",
      duration:" 1 Year 2018-2019",
      level:"Level 8",
      modules:"Object Oriented Software Development (Java),Computer Architecture and Technology Convergence, Network Technologies,Database Design and Development,Web Applications Development,Agile Software Development,Mobile Applications Development,Operating Systems and Cloud Computing,Computational Thinking with Algorithms"
       
    },

    {
      name:"University Of Limerick",
      course:"Masters in Social Regeneration",
      duration:" 1 Year 2015-2016",
      level:"Level 9",
      modules:"Urban Re-development,Community Development, Qualitative research methods, The Sociology of Youth & Community,Researching Social Exclusion ,Critical Perspectives on the Sociology of Youth, Community and Social Regeneration"
       
    },

    {
      name:"National University of Ireland Galway",
      course:"Bacehlors of Arts",
      duration:" 3 Years 2011-2014",
      level:"Level 8",
      modules:"Arts, Sociology and Politics"
    }

  ]
}
