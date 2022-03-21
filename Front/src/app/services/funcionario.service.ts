

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cargo } from '../cargoModel';
import { Funcionario } from './../funcionarioModel';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl: string = "http://localhost:8080/empresa"

  constructor(private http: HttpClient) { }

  buscarFuncionarioCargo(id_cargo: string):Observable<Funcionario[]>{
    const url = `${this.baseUrl}/funcionario/busca-cargo/${id_cargo}`
    return this.http.get<Funcionario[]>(url);
  }
//Esse cadastrar funcionario está ligado ao cargo
  // cadastrarFuncionario(funcionario:Funcionario,id_cargo:string):Observable<Cargo>{
  //   const url = `${this.baseUrl}/funcionario?cargo=${id_cargo}`
  //   return this.http.post<Cargo>(url,funcionario);
  // }

  buscarUmFuncionario(ra_funcionario:string):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/${ra_funcionario}`
    return this.http.get<Funcionario>(url)

  }

  excluirFuncionario(ra_funcionario:string):Observable<void>{
    const url = `${this.baseUrl}/funcionario/${ra_funcionario}`
    return this.http.delete<void>(url)
  }

  //esse editar também está ligado ao cargo
  // editarFuncionario(funcionario:Funcionario,ra_funcionario:String,id_cargo:string):Observable<Funcionario>{
  //   const url = `${this.baseUrl}/funcionario/${ra_funcionario}/?cargo=${id_cargo}`
  //   return this.http.put<Funcionario>(url,funcionario)
  // }

  mostrarTodosFuncionarios():Observable<Funcionario[]>{

    const url = `${this.baseUrl}/funcionario`
    return this.http.get<Funcionario[]>(url)
  }

  atribuirCargo(cargo:Cargo, ra_funcionario:String):Observable<Funcionario>{

    //("/funcionario/inserircargo/{ra_funcionario}")
    const url = `${this.baseUrl}/funcionario/inserircargo/${ra_funcionario}`
    return this.http.put<Funcionario>(url,cargo)

  }
//("/funcionario/deixarSemCargo/{ra_funcionario}")
  deixarFuncionarioSemCargo(funcionario:Funcionario, ra_funcionario:String):Observable<Funcionario>{

    const url = `${this.baseUrl}/funcionario/deixarSemCargo/${ra_funcionario}`
    return this.http.put<Funcionario>(url,funcionario)
  }

  cadastrarFuncionario(funcionario:Funcionario):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario`
    return this.http.post<Funcionario>(url,funcionario);
  }

  editarFuncionario(funcionario:Funcionario,ra_funcionario:String):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/${ra_funcionario}`
    return this.http.put<Funcionario>(url,funcionario)
  }
  //("/funcionario-cargo")
  buscarTodosFuncionarios():Observable<any>{

    const url = `${this.baseUrl}/funcionario-cargo`
    return this.http.get<any>(url)
  }





}
