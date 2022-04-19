import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFuncionario } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit {

  funcionario: IFuncionario = {
    nome:"",
    cargo:""
  }
  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || ' '
    this.funcionarioService.readById(id).subscribe(f => this.funcionario = f)
  }

  updateFuncionario(): void {
    this.funcionarioService.update(this.funcionario).subscribe(() => {
      this.funcionarioService.showMessage('Funcionario atualizado!')

      this.cancel()
    })
  }

  cancel() {
    this.router.navigate(['/funcionario'])
  }
}
