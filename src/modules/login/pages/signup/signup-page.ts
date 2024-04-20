import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup-page.html',
  styleUrl: './signup-page.css'
})
export class SignupPage {
  name: string = '';
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  cpf: string = '';
  telephone: string = '';

  trySignUp() {
    if (this.password == this.passwordConfirmation) {
      window.alert("Cadastro realizado!");
    } else {
      window.alert("As senhas não coincidem!");
    }

    this.clearForm();
  }

  private clearForm() {
    this.password = '';
    this.passwordConfirmation = '';
  }
}

