import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  projects=[
    {
      name:'Personal Portfolio Site',
      technology:"Angular8,Bootstrap3,CSS,HTML,Typescript",
      description:'I created a personal site to demonstrate my web development skills and to learn Angular',
      urlLottie:"https://assets4.lottiefiles.com/packages/lf20_xRmNN8.json",
      pageUrl:"https://github.com/jamesbrannigan89/Personal-Site",
    },

    {
      name:'Travel Site ',
      technology:"Angular8,Bootstrap3,CSS,HTML,Typescript",
      description:'I created a travel site to demonstrate my web development skills and to display my photos from travelling.',
      urlLottie:"https://assets4.lottiefiles.com/temp/lf20_H5La5b.json",
      pageUrl:"https://github.com/jamesbrannigan89/TravelSite",

    },

    {
      name:'News API using Rest Api',
      technology:"Angular8,Bootstrap3,CSS,HTML,Typescript",
      description:'I created a news App calling a news API to gather news Articles',
      urlLottie:"https://assets2.lottiefiles.com/packages/lf20_GpJLXJ.json",
      pageUrl:"https://github.com/jamesbrannigan89/news-site",

    },
    {
      name:'Personal Site',
      technology:"Html,CSS",
      description:'I created a personal site using Html and CSS',
      urlLottie:"https://assets6.lottiefiles.com/packages/lf20_45movo.json",
      pageUrl:"https://github.com/jamesbrannigan89/PersonalSite",

    }

  ]
}
