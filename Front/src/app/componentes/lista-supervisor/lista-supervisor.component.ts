import { CargoService } from './../../services/cargo.service';
import { Supervisor } from './../../supervisorModel';
import { Router } from '@angular/router';
import { SupervisorService } from './../../services/supervisor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-supervisor',
  templateUrl: './lista-supervisor.component.html',
  styleUrls: ['./lista-supervisor.component.css']
})
export class ListaSupervisorComponent implements OnInit {

  supervisores: any= []


  constructor(private supervisorService: SupervisorService, private router: Router ) { }

  ngOnInit(): void {
    // this.listarTodosSupervisores()
    this.buscarTodosSupervisores()

  }

  // listarTodosSupervisores (){
  //   this.supervisorService.listarTodosSupervisores().subscribe((resultado)=>{
  //     this.supervisores = resultado
  //   })
  // }

  buscarTodosSupervisores(){
    this.supervisorService.buscarTodosSupervisores().subscribe(resultado =>{

      console.log(resultado)

      resultado.forEach((supervisor: any[]) => {

        console.log(supervisor)

        let supervisorComCargo: any ={
          id_supervisor:'',
          sup_nome:'',
          sup_setor: '',
          id_cargo:'',
          car_descricao:'',
          car_nome:''
        }

        supervisorComCargo.id_supervisor = supervisor[0]
        supervisorComCargo.sup_nome = supervisor[1]
        supervisorComCargo.sup_setor = supervisor[2]
        supervisorComCargo.sup_foto = supervisor[3]
        if(supervisor[4] != null){
          supervisorComCargo.id_cargo = supervisor[4]
          supervisorComCargo.car_descricao = supervisor[5]
          supervisorComCargo.car_nome = supervisor[6]
        }else{
          supervisorComCargo.id_turma = 0
          supervisorComCargo.car_descricao = "----"
          supervisorComCargo.car_nome = "----"

        }


        this.supervisores.push(supervisorComCargo)

      });


    })

  }


}
