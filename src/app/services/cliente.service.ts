import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';
import { Servico } from '../models/servico.model'; // Certifique-se desta importação

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:8080/api/clientes'; // URL da API do backend

  constructor(private http: HttpClient) {}

  // Método para obter todos os clientes
  getAllClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  // Método para buscar serviços de um cliente
  getServicosByClienteId(clienteId: number): Observable<Servico[]> {
    return this.http.get<Servico[]>(`${this.apiUrl}/${clienteId}/servicos`);
  }
}
