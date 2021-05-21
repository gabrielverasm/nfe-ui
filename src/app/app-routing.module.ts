import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotafiscalFormComponent } from './notafiscal/notafiscal-form/notafiscal-form.component';
import { NotafiscalListaComponent } from './notafiscal/notafiscal-lista/notafiscal-lista.component';

const routes: Routes = [
  {path: '',component: NotafiscalListaComponent},
  {path: 'nfe', component: NotafiscalFormComponent},
  {path: 'nfe/:id', component: NotafiscalFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
