import { CargoService } from './../../services/cargo.service';
import { Cargo } from './../../cargoModel';
import { Supervisor } from './../../supervisorModel';
import { Router, ActivatedRoute } from '@angular/router';
import { SupervisorService } from 'src/app/services/supervisor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atribuir-cargo-supervisor',
  templateUrl: './atribuir-cargo-supervisor.component.html',
  styleUrls: ['./atribuir-cargo-supervisor.component.css']
})
export class AtribuirCargoSupervisorComponent implements OnInit {

  id_supervisor:any

 
 
  cargosSemSupervisor:any
  cargosSemSupervisorEscolhido:any = []
  supervisorSemCargoEscolhido: any = []

  supervisor:Supervisor ={
    id_supervisor:'',
    sup_nome:'',
    sup_setor:'',
    sup_foto:''
  }

  cargo:Cargo = {
    id_cargo:'',
    car_nome:'',
    car_descricao:''
  }

  constructor(private supervisorService:SupervisorService, private router:Router, private route: ActivatedRoute, private cargoService:CargoService) { }

  ngOnInit(): void {
    this.id_supervisor = this.route.snapshot.paramMap.get('id_supervisor')
    
    this.buscarSupervisor()
    this.buscarSupervisorDoCargo()
    this.buscarCargoSemSupervisor()
  }

  buscarSupervisor(){
    this.supervisorService.buscarUmSupervisor(this.id_supervisor).subscribe(resultado =>{
      this.supervisor = resultado

    })
  }

  buscarSupervisorDoCargo(){
    this.cargoService.buscarCargoDoSupervisor(this.id_supervisor).subscribe(resultado =>{

      if(resultado == null){
        alert("Para esse supervisor não está definida um cargo")

      }else{
        this.cargo = resultado
        console.log(resultado);
      }


    })
  }

  buscarCargoSemSupervisor(){

    this.cargoService.mostrarCargosSemSupervisor().subscribe((resultado)=>{

      this.cargosSemSupervisor = resultado
      console.log("aqui")
      console.log(resultado);

    })

  }

  escolherCargo(){
    console.log(this.cargosSemSupervisorEscolhido)
    this.cargo = this.cargosSemSupervisorEscolhido

  }

  atribuirCargo(){

    this.supervisorService.buscarUmSupervisor(this.id_supervisor).subscribe((resultado)=>{
      this.supervisor = resultado

    })

    this.cargoService.atribuirSupervisor(this.cargo, this.cargo.id_cargo,this.supervisor.id_supervisor).subscribe({
      complete: () => {alert("O cargo foi atribuído para o supervisor")
                      this.router.navigate(['/supervisao/listaSupervisor'])},
      error: () => {alert("Erro: O cargo não foi atribuído")
                    this.router.navigate(['/supervisao/listaSupervisor']) }
    })



  }

   deixarCargoSemSupervisor(){
     this.cargoService.deixarCargoSemSupervisor (this.cargo, this.cargo.id_cargo,this.supervisor.id_supervisor).subscribe({
     complete: () => {alert("O supervisor está sem Cargo")
                       //this.router.navigate(['/turma'])
                    },
      error: () => {alert("Erro: o supervisor não foi retirado do Cargo")
                     //this.router.navigate(['/turma'])
                   }
     })
   }

}
