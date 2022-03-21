import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './../../services/funcionario.service';
import { Funcionario } from 'src/app/funcionarioModel';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-lista-geral-funcionarios',
  templateUrl: './lista-geral-funcionarios.component.html',
  styleUrls: ['./lista-geral-funcionarios.component.css']
})
export class ListaGeralFuncionariosComponent implements OnInit {

  funcionarios: any=[]

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.mostrarTodosFuncionarios()
  }

  // mostrarTodosFuncionarios(){
  //   this.funcionarioService.mostrarTodosFuncionarios().subscribe(resultado =>{

  //     this.funcionarios = resultado


  //   })

  // }

  mostrarTodosFuncionarios(){
    this.funcionarioService.buscarTodosFuncionarios().subscribe(resultado =>{



      resultado.forEach((funcionario: any[]) => {

        console.log(funcionario)

        let funcionariosComCargo: any ={
          ra_funcionario:'',
          fu_nome:'',
          fu_cidade: '',

          id_cargo:'',
          car_descricao:'',
          car_nome:''
        }

        funcionariosComCargo.ra_funcionario = funcionario[0]
        funcionariosComCargo.fu_nome = funcionario[1]
        funcionariosComCargo.fu_cidade = funcionario[2]
        if(funcionario[3] != null){
          funcionariosComCargo.id_cargo = funcionario[3]
          funcionariosComCargo.car_descricao = funcionario[4]
          funcionariosComCargo.car_nome = funcionario[5]

        }else{
          funcionariosComCargo.id_cargo = 0
          funcionariosComCargo.car_nome = "----"
          funcionariosComCargo.car_descricao = "----"
        }


        this.funcionarios.push(funcionariosComCargo)

      });


    })

  }

}
