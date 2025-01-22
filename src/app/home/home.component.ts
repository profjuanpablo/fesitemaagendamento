import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clienteForm: FormGroup;
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false; // Controle de login
  isLoginFormVisible: boolean = false; // Para mostrar/ocultar o formulário de login
  loginFailed: boolean = false; // Flag para mostrar erro de login

  // Dados fictícios de login
  private readonly validUsername: string = 'admin';
  private readonly validPassword: string = '1234';

  constructor(private fb: FormBuilder) {
    this.clienteForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]]
    });
  }

  ngOnInit(): void {}

  // Método para alternar entre o formulário de cadastro e login
  toggleLoginForm(): void {
    this.isLoginFormVisible = !this.isLoginFormVisible;
  }

  // Método de login
  onLogin(): void {
    if (this.username === this.validUsername && this.password === this.validPassword) {
      this.isLoggedIn = true;
      this.loginFailed = false;
      this.toggleLoginForm(); // Fechar o formulário de login e mostrar o menu
    } else {
      this.loginFailed = true;
    }
  }

  // Método para cadastrar um cliente
  cadastrarCliente(): void {
    if (this.clienteForm.valid) {
      console.log(this.clienteForm.value);
      alert('Cliente cadastrado com sucesso!');
    }
  }
}
