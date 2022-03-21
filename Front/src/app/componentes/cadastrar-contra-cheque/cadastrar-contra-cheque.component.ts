import { ActivatedRoute, Router } from '@angular/router';
import { ContraChequeService } from './../../services/contra-cheque.service';
import { ContraCheque } from './../../contraChequeModel';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastrar-contra-cheque',
  templateUrl: './cadastrar-contra-cheque.component.html',
  styleUrls: ['./cadastrar-contra-cheque.component.css']
})
export class CadastrarContraChequeComponent implements OnInit {

  ra_funcionario:any

  contraCheque:ContraCheque ={
    codigo:'',
    ch_descricao:'',
    ch_dataReferencia:'',
    ch_salario:0,
    ch_descontos:0,
    ch_valorLiquido:0,
    ch_status:'PENDENTE'
  }

  constructor(private contraChequeService: ContraChequeService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.ra_funcionario = this.route.snapshot.paramMap.get('ra_funcionario')
  }

  inserirContraCheque(){
    this.contraChequeService.inserirContraCheque(this.contraCheque, this.ra_funcionario).subscribe({
      complete: () => {alert("Contra-Cheque cadastrado com sucesso")
                       this.location.back() },
      error: () => {alert("Erro: Contra-Cheque não cadastrado")
                    this.location.back()}
    })
  }

}
