import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'express';
import { max } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  

  constructor(private fb:FormBuilder,private router:Router) { }
    
    ngOnInit(): void {
     
    
  }
  signup: FormGroup=this.fb.group({
    fname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]],
    lname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]],
    email:['', [Validators.required, Validators.email]],
    username: ['',[Validators.required,Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.maxLength(6)]]
  })

  onSignup(){
    if (!this.signup.valid) {
      return;
    }
    this.router.navigateByUrl('/pocetna-page');
    console.log(this.signup.value);
    
  }

  
}
