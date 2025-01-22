import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ServicosComponent } from './servicos/servicos.component';
import { FormEditarServicoComponent } from './form-editar-servico/form-editar-servico.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'clientes', component: ClientesComponent },  // Rota para o componente Clientes
  { path: 'servicos', component: ServicosComponent },  // Rota para o componente Servicos
  { path: 'servicos/editar/:id', component: FormEditarServicoComponent },  // Rota de edição corrigida
  { path: '', redirectTo: '/home', pathMatch: 'full' }  // Definindo rota padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
