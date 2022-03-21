import { ActivatedRoute } from '@angular/router';
import { ContraChequeService } from 'src/app/services/contra-cheque.service';
import { Component, OnInit } from '@angular/core';
import { ContraCheque } from 'src/app/contraChequeModel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-contra-cheque',
  templateUrl: './editar-contra-cheque.component.html',
  styleUrls: ['./editar-contra-cheque.component.css']
})
export class EditarContraChequeComponent implements OnInit {

  codigo:any
  ra_funcionario:any

  contraCheque:ContraCheque ={



    codigo:'',
    ch_descricao: '',
    ch_dataReferencia:'',
    ch_salario:0,
    ch_descontos:0,
    ch_valorLiquido:0,
    ch_status:'',


  }

  constructor(private contraChequeService: ContraChequeService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.codigo = this.route.snapshot.paramMap.get('codigo')
    this.ra_funcionario = this.route.snapshot.paramMap.get('ra_funcionario')
    this.buscarContraCheque()
  }


  buscarContraCheque(){
    this.contraChequeService.buscarUmContraCheque(this.codigo).subscribe(resultado =>{
      this.contraCheque = resultado
      console.log(resultado.ch_dataReferencia)
      this.contraCheque.ch_dataReferencia = resultado.ch_dataReferencia.slice(0,10)
      console.log(this.contraCheque.ch_dataReferencia)
    })
  }

  editarBoleto(){
    this.contraChequeService.editarContraCheque(this.contraCheque,this.codigo,this.ra_funcionario).subscribe({
      complete: () =>{alert("Contra Cheque alterado com sucesso")
                      this.location.back()  },
      error: () =>{ alert("Erro: Contra Cheque não editado")
                    this.location.back()}
    })
  }

}
