import { Supervisor } from './../supervisorModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  baseUrl: string = "http://localhost:8080/empresa"

  constructor(private http:HttpClient) { }

  buscarSupervisorDoCargo (id_cargo: String): Observable<Supervisor>{

    const url = `${this.baseUrl}/supervisor-cargo/${id_cargo}`
    return this.http.get<Supervisor>(url)
  }

  buscarSupervisorSemCargo(): Observable<Supervisor[]>{

    const url = `${this.baseUrl}/supervisorSemCargo`

    return this.http.get<Supervisor[]>(url)
  }

  listarTodosSupervisores():Observable<Supervisor[]>{
    //http://localhost:8080/empresa/supervisor
    const url = `${this.baseUrl}/supervisor`
    return this.http.get<Supervisor[]>(url)

  }

  cadastrarSupervisor(supervisor:Supervisor):Observable<Supervisor>{
    const url = `${this.baseUrl}/supervisor`
    return this.http.post<Supervisor>(url,supervisor);
  }

  buscarSupervisorPeloNome(sup_nome:String):Observable<Supervisor>{
    const url = `${this.baseUrl}/supervisor-nome/${sup_nome}`
    return this.http.get<Supervisor>(url)
  }

  buscarTodosSupervisores():Observable<any>{

    const url = `${this.baseUrl}/supervisor/supervisor-cargo`
    return this.http.get<any>(url)
  }


  buscarUmSupervisor(id_supervisor:String):Observable<Supervisor>{
    const url = `${this.baseUrl}/supervisor/${id_supervisor}`
    return this.http.get<Supervisor>(url)


}

deletarSupervisor(id_supervisor:string):Observable<void>{
  const url = `${this.baseUrl}/supervisor/${id_supervisor}`
  return this.http.delete<void>(url)
}

editarSupervisor(supervisor:Supervisor,id_supervisor:String):Observable<Supervisor>{
  const url = `${this.baseUrl}/supervisor/${id_supervisor}`
  return this.http.put<Supervisor>(url,supervisor)
}
}
