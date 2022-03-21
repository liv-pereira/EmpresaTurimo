import { ContraCheque } from './../../contraChequeModel';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from './../../services/funcionario.service';
import { ContraChequeService } from './../../services/contra-cheque.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-contracheques',
  templateUrl: './lista-contracheques.component.html',
  styleUrls: ['./lista-contracheques.component.css']
})
export class ListaContrachequesComponent implements OnInit {

  ra_funcionario:any
  nomeFuncionario:any

  emitido:boolean = false
  cancelado:boolean = false

  contraCheques: ContraCheque[] = []

  contraCheque:ContraCheque ={
    codigo:'',
    ch_descricao:'',
    ch_dataReferencia:'',
    ch_salario:0,
    ch_descontos:0,
    ch_valorLiquido:0,
    ch_status:''
  }

  constructor(private contraChequeService: ContraChequeService,
    private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ra_funcionario = this.route.snapshot.paramMap.get('ra_funcionario')
    this.listarContraChequeDoFuncionario()
    this.buscarFuncionario()
  }

  listarContraChequeDoFuncionario(){
    this.contraChequeService.listarContraChequeDoFuncionario(this.ra_funcionario).subscribe(resultado =>{
      this.contraCheques = resultado

      console.log(resultado)
    })
  }

  buscarFuncionario(){
    this.funcionarioService.buscarUmFuncionario(this.ra_funcionario).subscribe(resultado =>{
      this.nomeFuncionario = resultado.fu_nome
    })
  }

  cancelarContraCheque(codigo:any){

    this.contraChequeService.buscarUmContraCheque(codigo).subscribe(resultado =>{
      this.contraCheque = resultado

      console.log(this.contraCheque)

      this.contraChequeService.cancelarContraCheque(this.contraCheque,this.contraCheque.codigo).subscribe({
        complete: () => {alert("Contra Cheque cancelado com sucesso")
                         this.listarContraChequeDoFuncionario()},
        error: () => {alert("Erro: Contra Cheque não cancelado")}
      })
    })


  }

}
