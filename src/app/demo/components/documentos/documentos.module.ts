import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropostaComponent } from './proposta/proposta.component';
import { DocumentosRoutingModule } from './documentos.routing.module';

@NgModule({
  imports: [
    DocumentosRoutingModule,
    CommonModule
  ],
  declarations: [
    PropostaComponent,
  ]
})
export class DocumentosModule { }
