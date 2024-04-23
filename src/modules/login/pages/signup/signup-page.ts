import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup-page.html',
  styleUrls: ['./signup-page.css'],
  imports: [ReactiveFormsModule, FormsModule],
  standalone: true,
})
export class SignupPage {
  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.pattern(/^((?:[^\s]+(?:\s+|$)){2,})$/)
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl('', [
        Validators.required
      ]),
      'passwordConfirmation': new FormControl('', [
        Validators.required
      ]),
      'cpf': new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
      ]),
      'telephone': new FormControl('', [
        Validators.required,
      ])
    });
  }

  trySignUp() {
    if (this.formulario.valid && this.formulario.value.password === this.formulario.value.passwordConfirmation) {
      window.alert("Cadastro realizado!");
      this.formulario.reset();
    } else {
      window.alert("Por favor, corrija os campos do formulário.");
    }
  }
}