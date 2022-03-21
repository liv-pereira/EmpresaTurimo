import { Supervisor } from './../../supervisorModel';
import { SupervisorService } from './../../services/supervisor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CargoService} from './../../services/cargo.service';
import { Cargo } from 'src/app/cargoModel';

@Component({
  selector: 'app-supervisor-do-cargo',
  templateUrl: './supervisor-do-cargo.component.html',
  styleUrls: ['./supervisor-do-cargo.component.css']
})
export class SupervisorDoCargoComponent implements OnInit {

  id_cargo:any

  supervisorCadastrado: boolean = false

  id_supervisorSemCargo: any

  supervisorSemCargoSelecionado: any = []

  supervisoresSemCargo: any

  supervisor: Supervisor = {
    id_supervisor: '',
    sup_nome: '',
    sup_setor: '',
    sup_foto: ''

  }
  cargo: Cargo = {
    id_cargo: '',
    car_descricao: '',
    car_nome: ''

  }

  constructor(private supervisorService: SupervisorService, private route: ActivatedRoute, private router: Router, private cargoService: CargoService) { }

  ngOnInit(): void {

    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')
    this.buscarCargo()
    this.buscarSupervisorDoCargo()
    this.buscarSupervisorSemCargo()

  }

  buscarCargo(){
    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe(resultado=>{
      this.cargo = resultado
    })

  }

  buscarSupervisorDoCargo(){
    this.supervisorService.buscarSupervisorDoCargo(this.id_cargo).subscribe((resultado)=>{
      if(resultado==undefined){
        alert("Para esse cargo não está definido supervisor")
        this.supervisorCadastrado = false
      }else{
        this.supervisor = resultado
        this.supervisorCadastrado = true
        }


    })
  }

  buscarSupervisorSemCargo(){

    this.supervisorService.buscarSupervisorSemCargo().subscribe((resultado)=>{

      this.supervisoresSemCargo = resultado
      console.log(this.supervisoresSemCargo)
    })
  }

  mostrarSupervisor(){
   console.log(this.supervisorSemCargoSelecionado)
    this.supervisor = this.supervisorSemCargoSelecionado


  }

  atribuirSupervisor(){

    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe((resultado)=>{
      this.cargo = resultado
    })

    this.cargoService.atribuirSupervisor(this.cargo, this.cargo.id_cargo, this.supervisor.id_supervisor).subscribe((resultado)=>{
      complete: () => {alert  ("O supervisor foi atribuido para o cargo")}
      error: () => { alert("Erro: O supervisor não foi atribuido")}
    })



  }
  deixarCargoSemSupervisor(){
    this.cargoService.deixarCargoSemSupervisor (this.cargo, this.id_cargo,this.supervisor.id_supervisor).subscribe({
      complete: () => {alert("O cargo agora está sem Supervisor")
                      this.router.navigate(['/listaCargo'])},
      error: () => {alert("Erro: o professor não foi retirado da turma")
                    this.router.navigate(['/listaCargo']) }
    })
  }
  escolherSupervisor(){
    console.log(this.supervisorSemCargoSelecionado)
    this.cargo = this.supervisorSemCargoSelecionado

  }



}
