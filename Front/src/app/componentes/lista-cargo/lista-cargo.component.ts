import { Supervisor } from './../../supervisorModel';
import { Cargo } from './../../cargoModel';
import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/services/cargo.service';
import { SupervisorService } from 'src/app/services/supervisor.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-cargo',
  templateUrl: './lista-cargo.component.html',
  styleUrls: ['./lista-cargo.component.css']
})
export class ListaCargoComponent implements OnInit {
//vetor vazio

  id_cargo:any
  cargos: any =[]
//  vamos fazer a injeção de dependencia do serviço que criamos na área de serviço
  constructor(private cargoService: CargoService, private supervisorService:SupervisorService, private router: Router) { }

  ngOnInit(): void {
   //vamos chamar dentro do onInit
    this.mostrarTodosCargos();
  }
 //Agora vamos chamar o método. E temos que definir uma variável que vamos chamar de turmas (abairo do export class) que vai ser um vetor de turma que inicializa com o vetor vazio
  mostrarTodosCargos(){
    this.cargoService.buscarTodosCargos().subscribe(resposta =>{

    //dentro da resposnta vem todos os cargos cadastrados e todos os cargos cadastrado vão ser armazenanos no this.cargos

console.log(resposta)
    resposta.forEach((cargo:any[])=>{

      let cargosComSupervisor: any ={

        id_cargo:'',
        car_descricao: '',
        car_nome:'',
        id_supervisor:'',
        sup_nome: '',
        sup_setor: '',

      }
      cargosComSupervisor.id_cargo = cargo[0]
      cargosComSupervisor.car_descricao = cargo[1]
      cargosComSupervisor.car_nome = cargo[2]
      if(cargo[3]!=null) {
        cargosComSupervisor.id_supervisor=cargo[3]
        cargosComSupervisor.sup_nome=cargo[4]
        cargosComSupervisor.sup_setor=cargo[5]
      } else {
        cargosComSupervisor.id_supervisor=0
        cargosComSupervisor.sup_nome="----"
        cargosComSupervisor.sup_setor="----"

      }

      // console.log(cargosComSupervisor)
      this.cargos.push(cargosComSupervisor)





    })



  })
    }
  }


