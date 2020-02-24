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
      name:'James Brannigan',
      title:'Graduate Developer - Interested in Front end',
      about:'About me',
    }

  ]
}
