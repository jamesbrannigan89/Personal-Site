import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {



  userEmail = new FormGroup({
    primaryEmail: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])

  });
  constructor() { }

  ngOnInit(): void {
  }

  info = [
    {
      city: "Galway City",
      email: "jamesbrannigan89@gmail.com",
      phone: "0876218446"
    }
  ]

  get primEmail(){
    return this.userEmails.get('primaryEmail')
    }
  
    get secondEmail(){
    return this.userEmails.get('secondaryEmail')
    }
  
    title = 'email-validation-tutorial';
    userEmails = new FormGroup({
    primaryEmail: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    secondaryEmail: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
    });  

}


