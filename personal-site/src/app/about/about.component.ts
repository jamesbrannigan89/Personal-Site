import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) {}


  ngOnInit(): void {
  }


  about=[
    {
      about:"About",
      description: "Currently I am a recent graduate in Software Development from GMIT. I graduated in november 2019 with a level 8 degree. I have college experience with Java, Javascript,HTML,CSS and right now I am currently learning Angular.",
      name:"James Brannigan",
      DOB:"12/11/93",
    }
  ]


  cardInfo=[

    {
      
    name:'Git Hub Projects',
     urlLottie:"https://assets9.lottiefiles.com/packages/lf20_emIAZ3.json",
     pageNav:'/portfolio'
    },
  
    {
      
    name:"Work Experience",
    urlLottie:"https://assets7.lottiefiles.com/packages/lf20_Hg1eiy.json",
    pageNav:"/work-experience"
    }
  
    ,
    {
     
    name:"College Experience",
    urlLottie:"https://assets4.lottiefiles.com/datafiles/h2aQ40qtvgA336t/data.json",
    pageNav:"/college-experience"
    }
  ]

 
}
