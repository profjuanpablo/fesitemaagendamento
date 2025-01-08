import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientesComponent } from './clientes/clientes.component';
import { ServicosComponent } from './servicos/servicos.component';
import { FormsModule } from '@angular/forms';
import { FormEditarServicoComponent } from './form-editar-servico/form-editar-servico.component';
import { ListServicoComponent } from './list-servico/list-servico.component';
import { ReactiveFormsModule } from '@angular/forms';  // Importando o ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ServicosComponent,
    FormEditarServicoComponent,
    ListServicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
