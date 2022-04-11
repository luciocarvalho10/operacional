import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './../funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  constructor(private funcionarioService: FuncionarioService,
    private router: Router) { }

  ngOnInit(): void { }

  createFuncionario() {
    this.funcionarioService.showMessage('Funcionário criado')
  }
  cancel() {
    this.router.navigate(['/funcionario'])
  }

}
