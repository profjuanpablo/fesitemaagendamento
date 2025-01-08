import { Component } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clientes: Cliente[] = [];
  errorMessage: string='';

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    // Buscar todos os clientes ao iniciar o componente
    this.clienteService.getAllClientes().subscribe(
      (data) => {
        this.clientes = data; // Preenche o array com os dados da API
      },
      (error) => {
        console.error('Erro ao buscar clientes:', error);
        this.errorMessage = 'Erro ao carregar os clientes.';
      }
    );
  }
}
