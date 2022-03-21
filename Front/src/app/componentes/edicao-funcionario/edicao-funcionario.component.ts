import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/funcionarioModel';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from './../../services/funcionario.service';

@Component({
  selector: 'app-edicao-funcionario',
  templateUrl: './edicao-funcionario.component.html',
  styleUrls: ['./edicao-funcionario.component.css']
})
export class EdicaoFuncionarioComponent implements OnInit {


  funcionario:Funcionario ={
    ra_funcionario: '',
    fu_nome:'',
    fu_cidade:'',
  }

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.funcionario.ra_funcionario = this.route.snapshot.paramMap.get('ra_funcionario')
    this.buscarUmFuncionario()

  }
  buscarUmFuncionario(){
    this.funcionarioService.buscarUmFuncionario(this.funcionario.ra_funcionario).subscribe((resultado)=>{
      this.funcionario = resultado
    })
  }

  // editarFuncionario(){
  //   this.funcionarioService.editarFuncionario(this.funcionario,this.funcionario.ra_funcionario,this.id_cargo).subscribe({
  //   complete: () => { alert("Funcionário editado com sucesso")
  //                     this.router.navigate([`cargo/funcionario/${this.id_cargo}`])},
  //   error: () => { alert("Funcionario não editado")
  //                     this.router.navigate([`cargo/funcionario/${this.id_cargo}`]) },
  //   next: () => { console.log("Funcionario cadastrado com sucesso")}

  //   });

  // }

  // cancelarEdicao(){
  //   this.router.navigate([`cargo/funcionario/${this.id_cargo}`])
  // }

  // trocarCargo(ra_funcionario:any){
  //   this.id_cargo = prompt("Pra qual cargo deseja transferir o funcionário?", "id_cargo")
  //   //alert(ra_aluno)
  //   this.funcionarioService.buscarUmFuncionario(ra_funcionario).subscribe(resultado =>{
  //     this.funcionario = resultado;
  //   })

    // :

    editarFuncionario(){
      this.funcionarioService.editarFuncionario(this.funcionario,this.funcionario.ra_funcionario).subscribe({
      complete: () => { alert("Funcionario editado com sucesso")
                        this.router.navigate([`/listaGeralFuncionario`])},
      error: () => { alert("Funcionario não editado")
                        this.router.navigate(['/listaGeralFuncionario']) },
      next: () => { console.log("Funcionario cadastrado com sucesso")}

      });

    }

    cancelarEdicao(){
      this.router.navigate(['/listaGeralFuncionario'])
    }

}
