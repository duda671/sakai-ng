import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PropostaComponent } from './proposta/proposta.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'proposta', data: { breadcrumb: 'Proposta' }, component: PropostaComponent},
    ])],
    exports: [RouterModule]
})
export class DocumentosRoutingModule { }
