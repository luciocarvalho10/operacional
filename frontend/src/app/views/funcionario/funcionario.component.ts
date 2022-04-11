import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToFuncionarioCriar(): void {
    this.router.navigate(['/funcionario/criar'])
  }
}
