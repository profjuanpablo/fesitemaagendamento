import { Component } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../services/cliente.service';
import { Servico } from '../models/servico.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'] // Corrigido: styleUrl -> styleUrls
})
export class ClientesComponent {
  clientes: Cliente[] = [];
  servicos: Servico[] = [];
  clienteSelecionado?: Cliente;
  errorMessage: string = '';

  novoCliente: Cliente = {
    nome: '',
    email: '',
    telefone: '',
    id: 0
  };

  constructor(private clienteService: ClienteService) {}

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

  // Método para buscar serviços de um cliente específico
  exibirServicos(cliente: Cliente): void {
    if (cliente.id !== undefined) {
      this.clienteSelecionado = cliente; // Armazena o cliente selecionado
      this.clienteService.getServicosByClienteId(cliente.id).subscribe(
        (data) => {
          this.servicos = data; // Preenche o array de serviços com os dados da API
        },
        (error) => {
          console.error('Erro ao buscar serviços do cliente:', error);
          this.errorMessage = 'Erro ao carregar os serviços do cliente.';
        }
      );
    } else {
      console.error('Cliente não possui um ID válido.');
      this.errorMessage = 'Cliente não possui um ID válido.';
    }
  }

  cadastrarCliente(): void {
    this.clienteService.createCliente(this.novoCliente).subscribe(
      (clienteCadastrado) => {
        alert(`Cliente ${clienteCadastrado.nome} cadastrado com sucesso!`);
        this.clientes.push(clienteCadastrado); // Adiciona o cliente à lista de clientes
        this.novoCliente = { nome: '', email: '', telefone: '' }; // Limpa o formulário
      },
      (error) => {
        console.error('Erro ao cadastrar cliente:', error);
        this.errorMessage = 'Erro ao cadastrar o cliente.';
      }
    );
  }
}
