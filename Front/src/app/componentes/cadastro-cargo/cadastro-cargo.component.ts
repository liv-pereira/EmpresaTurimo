import { Cargo } from './../../cargoModel';
import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/services/cargo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cargo',
  templateUrl: './cadastro-cargo.component.html',
  styleUrls: ['./cadastro-cargo.component.css']
})
export class CadastroCargoComponent implements OnInit {

  cargo:Cargo = {
    car_descricao:"",
    car_nome: ""
  }

  constructor(private cargoService: CargoService, private router:Router ) { }

  ngOnInit(): void {
  }

  cadastrarCargo(){
    this.cargoService.cadastrarCargo(this.cargo).subscribe((resultado)=>{
      alert("Cargo cadastrada com sucesso")
      this.router.navigate(['/cargo'])
    })
  }

}
