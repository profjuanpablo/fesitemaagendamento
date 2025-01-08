import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { ServicoService } from '../services/servico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from '../models/servico.model';

@Component({
  selector: 'app-form-editar-servico',
  templateUrl: './form-editar-servico.component.html',
  styleUrl: './form-editar-servico.component.css'
})
export class FormEditarServicoComponent implements OnInit {

  servico: Servico = {
    id: 0,
    descricao: '',
    linguagem: '',
    status: '',
    cliente: {
      id: 0, nome: '', email: '',
      telefone: ''
    }
  };

  clientes: Cliente[] = []; // Lista de clientes para escolher

  constructor(
    private servicoService: ServicoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.servicoService.getServicoById(id).subscribe(servico => {
      this.servico = servico;
    });

    // Aqui você pode preencher a lista de clientes, semelhante ao cadastro
    this.clientes = [
      {
        id: 1, nome: 'Cliente 1', email: 'cliente1@mail.com',
        telefone: ''
      },
      {
        id: 2, nome: 'Cliente 2', email: 'cliente2@mail.com',
        telefone: ''
      }
    ];
  }

  // Método para salvar o serviço editado
  saveServico(): void {
    this.servicoService.editServico(this.servico).subscribe(() => {
      this.router.navigate(['/servicos']);
    });
  }
}
