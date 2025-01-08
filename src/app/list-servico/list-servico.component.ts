import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicoService } from '../services/servico.service';
import { Servico } from '../models/servico.model';

@Component({
  selector: 'app-list-servico',
  templateUrl: './list-servico.component.html',
  styleUrls: ['./list-servico.component.css']
})
export class ListServicoComponent implements OnInit {

  servicos: Servico[] = [];

  constructor(
    private servicoService: ServicoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadServicos();
  }

  // Método para carregar todos os serviços
  loadServicos(): void {
    this.servicoService.getAllServicos().subscribe(servicos => {
      this.servicos = servicos;
    });
  }

  // Método para redirecionar para o formulário de edição
  editServico(id: number): void {
    this.router.navigate([`/edit-servico/${id}`]);
  }

}
