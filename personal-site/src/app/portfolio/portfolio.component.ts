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
      name:'Personal Portfolio Using Angular8 Site',
      technology:"Angular8,Bootstrap3,CSS,HTML,Typescript",
      description:'I created a personal site to demonstrate my web development skills and to learn Angular',
      imageUrl:"/assets/images/personalSite.jpg",
      pageUrl:"https://github.com/jamesbrannigan89/Personal-Site",
    },

    {
      name:'Travel Site From my 5 month travelling',
      technology:"Angular8,Bootstrap3,CSS,HTML,Typescript",
      description:'I created a travel site to demonstrate my web development skills and to display my photos from travelling.',
      imageUrl:"/assets/images/personalSite.jpg",
      pageUrl:"https://github.com/jamesbrannigan89/TravelSite",

    },

    {
      name:'News API using Rest Api',
      technology:"Angular8,Bootstrap3,CSS,HTML,Typescript",
      description:'I created a news App calling a news API to gather news Articles',
      imageUrl:"/assets/images/personalSite.jpg",
      pageUrl:"https://github.com/jamesbrannigan89/news-site",

    }
  ]
}
