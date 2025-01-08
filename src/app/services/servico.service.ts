import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servico } from '../models/servico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private apiUrl = 'http://localhost:8080/api/servicos';  // Endereço da API de serviços

  constructor(private http: HttpClient) { }

  // Método para pegar todos os serviços
  getAllServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(this.apiUrl);
  }

  // Método para pegar um serviço pelo id
  getServicoById(id: number): Observable<Servico> {
    return this.http.get<Servico>(`${this.apiUrl}/${id}`);
  }

  // Método para adicionar um serviço
  addServico(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(this.apiUrl, servico);
  }

  // Método para editar um serviço
  editServico(servico: Servico): Observable<Servico> {
    return this.http.put<Servico>(`${this.apiUrl}/${servico.id}`, servico);
  }

  // Método para excluir um serviço
  deleteServico(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
