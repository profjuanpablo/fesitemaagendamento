import { Cliente } from "./cliente.model";


export interface Servico {
    id: number;
    descricao: string;
    linguagem: string;
    status: string;
    cliente: Cliente; // Relacionado com o cliente
  }
  