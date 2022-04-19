import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { IFuncionario } from './funcionario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl = 'http://localhost:3000/funcionario'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(funcionario: IFuncionario): Observable<IFuncionario> {
    return this.http.post<IFuncionario>(this.baseUrl, funcionario)
  }

  read(): Observable<IFuncionario[]> {
    return this.http.get<IFuncionario[]>(this.baseUrl)
  }

  readById(id: string): Observable<IFuncionario> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<IFuncionario>(url)
  }

  update(funcionario: IFuncionario): Observable<IFuncionario> {
    const url = `${this.baseUrl}/${funcionario.id}`
    return this.http.put<IFuncionario>(url, funcionario)
  }

  delete(id: string): Observable<IFuncionario> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<IFuncionario>(url)
  }
}
