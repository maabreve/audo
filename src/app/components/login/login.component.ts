import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';

import { IUser } from  '../../models/user';
import { AuthService } from  '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      code: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get formControls() { 
    return this.loginForm.controls; 
  }

  login(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) {
      return;
    }
    
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/exams');
  }

}
