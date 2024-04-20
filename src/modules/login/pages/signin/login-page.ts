import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  signIn() {
    console.log('Email:', this.email);
    console.log('Senha:', this.password);
    window.alert("Login realizado!");
  }

  signUp() {
    this.router.navigate(["signup"]);
  }
}
