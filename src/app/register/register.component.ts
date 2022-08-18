import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  title = 'reactive-form';
  countryList = [
    {id: 1, name: 'Viet Nam'},
    {id: 2, name: 'Canada'},
    {id: 3, name: 'USA'},
  ];

  contactForm = new FormGroup({
    email: new FormControl('', [Validators.pattern('^\\w+([.-]?\\w+)*@[a-z]+\\.(\\w+){2,}(\\.\\w{2,3})?'),Validators.required]),
    gender: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required,Validators.min(18)]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phone: new FormControl('', [Validators.required, Validators.pattern('/^\\+84\\d{9,10}$/')])
  });

  get email(){
    return this.contactForm.get('email');
  }
  get gender(){
    return this.contactForm.get('gender');
  }
  get country(){
    return this.contactForm.get('country');
  }
  get age(){
    return this.contactForm.get('age');
  }
  get password(){
    return this.contactForm.get('password');
  }
  get confirmPassword(){
    return this.contactForm.get('confirmPassword');
  }

  get phone(){
    return this.contactForm.get('phone');
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

  ngOnInit(): void {
  }

}
