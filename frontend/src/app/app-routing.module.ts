import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// views
import { HomeComponent } from './views/home/home.component';
import { FuncionarioComponent } from './views/funcionario/funcionario.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
