import { Component, OnInit } from '@angular/core';
import { IFuncionario } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.css']
})
export class FuncionarioReadComponent implements OnInit {

  funcionario: IFuncionario[] = []
  displayedColumns: String[] = ['id', 'nome', 'cargo']

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarioService.read().subscribe(f => {
      this.funcionario = f
      console.log(f)
    })
  }

}
