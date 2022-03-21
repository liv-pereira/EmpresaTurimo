import { ContraCheque } from './../contraChequeModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ContraChequeService {

  baseUrl: String = 'http://localhost:8080/empresa'

  constructor(private http: HttpClient) {

   }

   buscarUmContraCheque(codigo:string):Observable<ContraCheque>{


    const url = `${this.baseUrl}/funcionario/contraCheque/${codigo}`
    return this.http.get<ContraCheque>(url)
  }
  listarContraChequeDoFuncionario(ra_funcionario: String):Observable<ContraCheque[]>{

    const url = `${this.baseUrl}/funcionario/contraChequeDoFuncionario/${ra_funcionario}`
    return this.http.get<ContraCheque[]>(url)
  }


  inserirContraCheque (contraCheque: ContraCheque, ra_funcionario:any):Observable<ContraCheque>{
    const url = `${this.baseUrl}/funcionario/contraCheque/${ra_funcionario}`
    return this.http.post<ContraCheque>(url,contraCheque);
  }

  editarContraCheque(contraCheque:ContraCheque, codigo:any, ra_funcionario:any):Observable<ContraCheque>{
    const url = `${this.baseUrl}/funcionario/contraCheque/${codigo}/${ra_funcionario}`
    return this.http.put<ContraCheque>(url,contraCheque)
  }

  excluirContraCheque(codigo:string):Observable<void>{
    const url = `${this.baseUrl}/funcionario/contraCheque/${codigo}`
    return this.http.delete<void>(url)
  }

  cancelarContraCheque(contraCheque:ContraCheque, codigo:any):Observable<ContraCheque>{

    const url = `${this.baseUrl}/funcionario/cancelarContraCheque/${codigo}`
    return this.http.put<ContraCheque>(url,contraCheque)
  }
}
