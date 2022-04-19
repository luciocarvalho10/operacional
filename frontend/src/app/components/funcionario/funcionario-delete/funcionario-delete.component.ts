import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFuncionario } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-delete',
  templateUrl: './funcionario-delete.component.html',
  styleUrls: ['./funcionario-delete.component.css']
})
export class FuncionarioDeleteComponent implements OnInit {
  funcionario: IFuncionario = {
    nome: '',
    cargo: ''
  }
  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || ''
    this.funcionarioService.readById(id).subscribe(f => (this.funcionario = f))
  }

  deleteFuncionario(): void {
    const id = String(this.funcionario.id)
    this.funcionarioService.delete(id).subscribe(() => {
      this.funcionarioService.showMessage('Funcionario deletado!')

      this.cancel()
    })
  }

  cancel() {
    this.router.navigate(['/funcionario'])
  }
}
