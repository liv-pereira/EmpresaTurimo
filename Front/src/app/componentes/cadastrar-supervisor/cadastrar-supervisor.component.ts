import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SupervisorService } from './../../services/supervisor.service';
import { Component, OnInit } from '@angular/core';
import { Supervisor } from 'src/app/supervisorModel';

@Component({
  selector: 'app-cadastrar-supervisor',
  templateUrl: './cadastrar-supervisor.component.html',
  styleUrls: ['./cadastrar-supervisor.component.css']
})
export class CadastrarSupervisorComponent implements OnInit {

  idSupervisorCadastrado:any

  supervisorCadastrado:boolean = false

  supervisor:Supervisor ={
    id_supervisor:'',
    sup_nome:'',
    sup_setor:'',
    sup_foto:''
  }
  foto:any

  constructor(private supervisorService: SupervisorService, private router: Router, private http:HttpClient ) { }

  ngOnInit(): void {
  }

  cadastrarSupervisor(){
    this.supervisorService.cadastrarSupervisor(this.supervisor).subscribe({
      complete: () => {alert("Supervisor cadastrado com sucesso")
                        this.supervisorService.buscarSupervisorPeloNome(this.supervisor.sup_nome)
                      .subscribe(resultado =>{
                        console.log(resultado)
                        this.idSupervisorCadastrado = resultado.id_supervisor
                        this.supervisorCadastrado = true
                      })},

      error: () => {alert("Erro: Não foi possível cadastrar o supervisor")}
    })
  }

  subirFoto(event:any){


    if(event.target.files && event.target.files[0]){
      this.foto = event.target.files[0]

      const formData = new FormData
      formData.append("foto",this.foto)

      const nome:string = this.supervisor.sup_nome + "-" + event.target.files[0].name

      //`http://` + localBanco + `:8080/arrozApp/send/?nome=` + nomeFoto
      //http://localhost:8080/empresa/envio/3?nome=yyyyyyyyy
      //esse 3 é o id do professor e é idSupervisorCadastrado
      this.http.post(`http://localhost:8080/empresa/envio/${this.idSupervisorCadastrado}?nome=${nome}`,formData).subscribe({
        next: () => console.log("Foto enviada")
      })

      alert("Foto anexada ao Supervisor")


    }
  }


}
