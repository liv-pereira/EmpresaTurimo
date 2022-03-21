import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from './../../services/funcionario.service';
import { Funcionario } from 'src/app/funcionarioModel';


@Component({
  selector: 'app-exclusao-funcionario',
  templateUrl: './exclusao-funcionario.component.html',
  styleUrls: ['./exclusao-funcionario.component.css']
})
export class ExclusaoFuncionarioComponent implements OnInit {

  id_cargo: string = ''

  funcionario:Funcionario ={
    ra_funcionario: '',
    fu_nome:'',
    fu_cidade:'',

  }

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.funcionario.ra_funcionario = this.route.snapshot.paramMap.get('ra_funcionario')
    // this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!
    this.buscarUmFuncionario()
  }

  buscarUmFuncionario(){
    this.funcionarioService.buscarUmFuncionario(this.funcionario.ra_funcionario).subscribe((resultado)=>{
      this.funcionario = resultado
    })
  }
  // excluirAluno(){
  //   this.funcionarioService.excluirFuncionario(this.funcionario.ra_funcionario).subscribe({
  //     complete: () => { alert("Funcionário excluído com sucesso")
  //                       this.router.navigate([`cargo/funcionario/${this.id_cargo}`])},
  //     error: () => { alert("Erro ao excluir o aluno")
  //                   this.router.navigate([`cargo/funcionario/${this.id_cargo}`]) },
  //     next: () => { console.log("funcionário excluido com sucesso")}

  //     });
  // }

  excluirAluno(){
    this.funcionarioService.excluirFuncionario(this.funcionario.ra_funcionario).subscribe({
      complete: () => { alert("Funcionario excuído com sucesso")
                        this.router.navigate(['/listaGeralFuncionario'])},
      error: () => { alert("Erro ao excluir o Funcionario")
                    this.router.navigate(['/listaGeralFuncionario']) },
      next: () => { console.log("aluno excluido com sucesso")}

      });
  }


}
