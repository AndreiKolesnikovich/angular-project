import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from './../../../core/auth.service';

@Component({
  selector: 'app-auth',
  imports: [NgIf, ReactiveFormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent{
  authForm: FormGroup;

  @Input() isLoginMode: boolean = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.authForm = this.fb.group({
      username: [''],
      email: [''],
      password: ['']
    });
  } 

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.authForm.reset();
  }

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

  const authData = this.authForm.value;

  if (this.isLoginMode) {
      this.authService.signIn({ email: authData.email, password: authData.password }).subscribe({
        next: (response) => {
          this.router.navigate(['/home']); 
        },
        error: (error) => {
          this.authForm.reset();
        }
      });
    } else {
      this.authService.signUp({
        username: authData.username,
        email: authData.email,
        password: authData.password
      }).subscribe({
        next: (response) => {
          this.isLoginMode = true;
          this.authForm.reset();
        },
        error: (error) => {
        }
      });
    }
  }
}