

import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/funcionarioModel'

import { CargoService } from 'src/app/services/cargo.service';
import { Cargo } from 'src/app/cargoModel';

@Component({
  selector: 'app-lista-funcionario',
  templateUrl: './lista-funcionario.component.html',
  styleUrls: ['./lista-funcionario.component.css']
})
export class ListaFuncionarioComponent implements OnInit {

  id_cargo: string = ''
  car_nome: string = ''
  // car_nome: string=''
   cargo: Cargo = {

     car_descricao: '',
     car_nome: '',

 }
  funcionarios: Funcionario [] = []

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router, private cargoService: CargoService) { }

  ngOnInit(): void {

    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!;
   
    this.buscarFuncionarioCargo();
    this.mostrarNomeCargo();
   
    

  }

  buscarFuncionarioCargo(){
    this.funcionarioService.buscarFuncionarioCargo(this.id_cargo).subscribe((resultado)=>{
      this.funcionarios = resultado;
    })
  }


  mostrarNomeCargo(){
    this.cargoService.mostrarNomeCargo(this.id_cargo, this.car_nome).subscribe((resposta)=>{
      this.cargo = resposta
      console.log(this.cargo)
    })
  }



  // buscarNomeDoCargo (){
  //   this.cargoService.buscarNomeDoCargo(this.id_nome)
  // }



}
