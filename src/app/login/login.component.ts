import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{




  constructor(private fb:FormBuilder,private router:Router){}
  ngOnInit(): void {
   
    
    }
    loginForm: FormGroup=this.fb.group({
      username: ['',[Validators.required,Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.maxLength(6)]]
    })
    
  
    onLogin() {
      if (!this.loginForm.valid) {
        return;
      }
      this.router.navigateByUrl('/pocetna-page');
      console.log(this.loginForm.value);
    }

}