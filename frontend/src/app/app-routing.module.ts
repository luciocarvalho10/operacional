import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// views
import { HomeComponent } from './views/home/home.component';
import { FuncionarioComponent } from './views/funcionario/funcionario.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioDeleteComponent } from './components/funcionario/funcionario-delete/funcionario-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "funcionario",
    component: FuncionarioComponent
  },
  {
    path: "funcionario/criar",
    component: FuncionarioCreateComponent
  },
  {
    path: "funcionario/atualizar/:id",
    component: FuncionarioUpdateComponent
  },
  {
    path: "funcionario/deletar/:id",
    component: FuncionarioDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
