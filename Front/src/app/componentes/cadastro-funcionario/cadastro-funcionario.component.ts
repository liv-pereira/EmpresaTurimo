import { CargoService } from 'src/app/services/cargo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from './../../services/funcionario.service';
import { Funcionario } from 'src/app/funcionarioModel';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  id_cargo: string = ''
  cargos:any
  cargoEscolhida: any

  funcionario:Funcionario ={
    ra_funcionario: '',
    fu_nome:'',
    fu_cidade:'',

  }

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router, private cargoService: CargoService) { }

  ngOnInit(): void {
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!
    this.mostrarTurmasParaAtribuicao()
  }

  // cadastrarFuncionario(){
  //   this.funcionarioService.cadastrarFuncionario(this.funcionario,this.id_cargo).subscribe({
  //   complete: () => { alert("Funcionário cadastrado com sucesso")
  //                     this.router.navigate([`listaCargo/funcionario/${this.id_cargo}`])},
  //   error: () => { alert("Funcionario não cadastrado")
  //                     this.router.navigate([`listaCargo/funcionario/${this.id_cargo}`]) },
  //   next: () => { console.log("Funcionario cadastrado com sucesso")}

  //   });

  // }
  cadastroFuncionario(){
    this.funcionarioService.cadastrarFuncionario(this.funcionario).subscribe({
    complete: () => { alert("Funcionario cadastrado com sucesso")
                      this.router.navigate(['/listaGeralFuncionario'])
                    },
    error: () => { alert("Aluno não cadastrado")
                      this.router.navigate(['/listaGeralFuncionario'])
                    },
    next: () => { console.log("Funcionario cadastrado com sucesso")}

    });

  }

  cancelarCadastro(){
    this.router.navigate([`cargo/funcionario/${this.id_cargo}`])
  }

  mostrarTurmasParaAtribuicao(){
    this.cargoService.mostrarTodosCargos().subscribe(resultado =>{
      this.cargos = resultado
    })
  }

}
