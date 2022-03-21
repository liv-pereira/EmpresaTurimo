import { ActivatedRoute, Router } from '@angular/router';
import { CargoService } from 'src/app/services/cargo.service';
import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Cargo } from 'src/app/cargoModel';
import { Funcionario } from 'src/app/funcionarioModel';

@Component({
  selector: 'app-atribuir-cargo',
  templateUrl: './atribuir-cargo.component.html',
  styleUrls: ['./atribuir-cargo.component.css']
})
export class AtribuirCargoComponent implements OnInit {

  cargo:Cargo[] = []
  cargoEscolhido: any = []
  id_cargo:any
  ra_funcionario:any
  cargoDoFuncionario:any = []

  funcionario:Funcionario ={
    ra_funcionario:'',
    fu_nome:'',
    fu_cidade:'',

  }

  constructor(private cargoService: CargoService, private funcionarioService: FuncionarioService, private route:ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.ra_funcionario = this.route.snapshot.paramMap.get('ra_funcionario')
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')
    this.buscarTodosCargos()
    this.mostrarFuncionario()
    this.buscarCargo()


  }

  buscarTodosCargos(){
    this.cargoService.mostrarTodosCargos().subscribe(resultado =>{
      this.cargo = resultado
    })
  }

  mostrarFuncionario(){
    this.funcionarioService.buscarUmFuncionario(this.ra_funcionario).subscribe(resultado =>{
      this.funcionario = resultado
      console.log(resultado)
    })
  }


  buscarCargo(){
    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe(resultado =>{
      this.cargoEscolhido = resultado
      console.log(this.cargoDoFuncionario)
    })
  }

  mostrarCargo(){
    console.log(this.cargoEscolhido)
  }


  atribuirCargo(){
    this.funcionarioService.atribuirCargo(this.cargoEscolhido,this.ra_funcionario).subscribe({
      complete: () => { alert("Funcionario cadastrado no cargo com sucesso")
                        this.router.navigate(['/alunosComTurma'])
                      },
      error: () => { alert("Funcionario não cadastrado no cargo")
                        this.router.navigate(['/alunosComTurma'])
                      },
      next: () => { console.log("Funcionario cadastrado com sucesso")}

      });
  }

  deixarFuncionarioSemCargo(){
    this.funcionarioService.deixarFuncionarioSemCargo (this.funcionario,this.ra_funcionario).subscribe({
      complete: () => { alert("Funcionario ficou sem turma")
                        this.router.navigate(['/alunosComTurma'])
                      },
      error: () => { alert("Funcionario não ficou sem cargo")
                        this.router.navigate(['/alunosComTurma'])
                      },
      next: () => { console.log("Funcionario editado com sucesso")}

      });

  }


}
