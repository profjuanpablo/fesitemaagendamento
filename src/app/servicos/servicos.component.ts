import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importando Router para redirecionamento
import { ServicoService } from '../services/servico.service';  // Importando o serviço para fazer chamadas à API
import { Servico } from '../models/servico.model';  // Importando a interface Servico

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  servicos: Servico[] = [];  // Definindo a lista de serviços

  constructor(
    private servicoService: ServicoService,  // Injetando o serviço para fazer chamadas à API
    private router: Router  // Injetando o Router para navegar
  ) { }

  ngOnInit(): void {
    this.loadServicos();  // Carregar os serviços ao iniciar o componente
  }

  // Método para carregar todos os serviços
  loadServicos(): void {
    this.servicoService.getAllServicos().subscribe(servicos => {
      this.servicos = servicos;  // Atribuindo a lista de serviços ao componente
    });
  }

  // Método para redirecionar para o formulário de edição de um serviço
  editServico(id: number): void {
    this.router.navigate([`/edit-servico/${id}`]);  // Navega para o formulário de edição com o id do serviço
  }

}
