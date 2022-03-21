import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContraCheque } from 'src/app/contraChequeModel';
import { ContraChequeService } from 'src/app/services/contra-cheque.service';

@Component({
  selector: 'app-excluir-contra-cheque',
  templateUrl: './excluir-contra-cheque.component.html',
  styleUrls: ['./excluir-contra-cheque.component.css']
})
export class ExcluirContraChequeComponent implements OnInit {

  codigo:any
  ra_funcionario:any

  statusEscolhidoNoSelect:any

  statusParaEscolha:string[] = []

  contraCheque:ContraCheque ={
    codigo:'',
    ch_descricao:'',
    ch_dataReferencia:'',
    ch_salario:0,
    ch_descontos:0,
    ch_valorLiquido:0,
    ch_status:'PENDENTE'
  }

  constructor(private contraChequeService: ContraChequeService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.codigo = this.route.snapshot.paramMap.get('codigo')
    this.ra_funcionario = this.route.snapshot.paramMap.get('ra_funcionario')
    this.statusParaEscolha = ['EMITIDO','CANCELADO','PENDENTE']
    this.mostrarContraCheque()

  }

  mostrarContraCheque(){
    this.contraChequeService.buscarUmContraCheque(this.codigo).subscribe(resultado =>{
      this.contraCheque = resultado
      this.contraCheque.ch_status = resultado.ch_status
    })
  }

  excluirBoleto(){
    this.contraChequeService.excluirContraCheque(this.codigo).subscribe({
      complete: () => {alert("Contra Cheque excluído com sucesso")
                      this.router.navigate([`/funcionario/contraCheque/${this.ra_funcionario}`])},
      error: () => {alert("Erro: Algo sai errado - boleto não excluído")}
    })
  }

  statusEscolhido(){
    console.log(this.statusEscolhidoNoSelect)
    this.contraCheque.ch_status = this.statusEscolhidoNoSelect

  }

}
