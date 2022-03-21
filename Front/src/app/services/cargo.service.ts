import { Cargo } from './../cargoModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  baseUrl: String ="http://localhost:8080/empresa"

  constructor(private http: HttpClient) { }

  // Para acessar BD
  mostrarTodosCargos(): Observable <Cargo[]>{
    const url = `${this.baseUrl}/cargo`
    return this.http.get<Cargo[]>(url)
  }
  buscarTodosCargos():Observable<any>{

    const url = `${this.baseUrl}/cargo/cargo-supervisor`
    return this.http.get<any>(url)
  }




  cadastrarCargo(cargo:Cargo):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo`
    return this.http.post<Cargo>(url,cargo)

  }

  mostrarUmCargo(id:string):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo/${id}`
    return this.http.get<Cargo>(url)

  }

  mostrarNomeCargo(id: String,nome:string):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo/${id}/${nome}`
    return this.http.get<Cargo>(url)

  }

  excluirCargo(id:String):Observable<void>{
    const url = `${this.baseUrl}/cargo/${id}`
    return this.http.delete<void>(url)
  }
  editarCargo(cargo:Cargo):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo/${cargo.id_cargo}`
    return this.http.put<Cargo>(url,cargo)
  }

  atribuirSupervisor(cargo: Cargo, id_cargo: String, id_supervisor: String):Observable<void>{

    const url = `${this.baseUrl}/cargo/definirSupervisor/${id_cargo}/${id_supervisor}`
    return this.http.put<void>(url,cargo);
  }

  buscarCargoDoSupervisor(id_supervisor:String):Observable<Cargo>{

    const url = `${this.baseUrl}/cargo/cargo-supervisor/${id_supervisor}`
    return this.http.get<Cargo>(url)
  }


  mostrarCargosSemSupervisor():Observable<Cargo[]>{

    const url = `${this.baseUrl}/cargoSemSupervisor`

    return this.http.get<Cargo[]>(url)
  }

  deixarCargoSemSupervisor(cargo:Cargo,id_cargo:String, id_supervisor:String):Observable<void>{



    const url = `${this.baseUrl}/cargo/tirarSupervisor/${id_cargo}/${id_supervisor}`
    return this.http.put<void>(url,cargo);

  }
 

  



}
