import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './../funcionario.service';
import { Router } from '@angular/router';
import { IFuncionario } from '../funcionario.model';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  funcionario: IFuncionario = {
    nome: 'Lucio',
    cargo: 'AGRS'
  }

  constructor(private funcionarioService: FuncionarioService,
    private router: Router) { }

  ngOnInit(): void { }

  createFuncionario(): void {
    this.funcionarioService.create(this.funcionario).subscribe(() => {

      this.funcionarioService.showMessage('Funcionário criado')

      this.cancel()
    })
  }

  cancel() {
    this.router.navigate(['/funcionario'])
  }

}
