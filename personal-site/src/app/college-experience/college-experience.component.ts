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
      backGroundImage:"/assets/images/gmit.jpg",
      course:"Higher Diploma in Software Development",
      duration:" 1 Year 2018-2019",
      level:"Level 8",
       module1:"Object Oriented Software Development (Java)",
       module2:"Network Technologies",
       module3:"Database Design and Development",
       module4:"Web Applications Development",
       module5:"Mobile Applications Development",
       module6:"Agile Software Development",
       module7:"Operating Systems and Cloud Computing",
    },

    {
      name:"University Of Limerick",
      backGroundImage:"/assets/images/ul.jpg",
      course:"Masters in Social Regeneration",
      duration:" 1 Year 2015-2016",
      level:"Level 9",
      modules:",, , , ,, ",
      module1:"Urban Re-development",
      module2:"Community Development",
      module3:"Qualitative research methods",
      module4:"The Sociology of Youth & Community",
      module5:"Researching Social Exclusion",
      module6:"Critical Perspectives on the Sociology of Youth",
      module7:"Community and Social Regeneration",
    },

    {
      name:"National University of Ireland Galway",
      backGroundImage:"/assets/images/nuig.jpg",
      course:"Bacehlors of Arts",
      duration:" 3 Years 2011-2014",
      level:"Level 8",
      module1:"Arts, Sociology and Politics"
    }

  ]
}
