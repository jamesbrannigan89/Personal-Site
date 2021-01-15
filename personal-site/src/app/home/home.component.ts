import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  opened= false;

  toggleSidebar(){

    this.opened= !this.opened;
  }
 

  

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  information=[
    {
      name:'James Brannigan',
      title:'Software Support',
      about:'I am currently working as Support for SAP on their HR Management System Success Factors..',
    }
  ]

  
 

}

