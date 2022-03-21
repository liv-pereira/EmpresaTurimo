import { CargoService } from 'src/app/services/cargo.service';
import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/cargoModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exclusao-cargo',
  templateUrl: './exclusao-cargo.component.html',
  styleUrls: ['./exclusao-cargo.component.css']
})
export class ExclusaoCargoComponent implements OnInit {

  cargo:Cargo = {
    id_cargo: "",
    car_descricao:"",
    car_nome: ""
  }

  constructor(private cargoService:CargoService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    //na hora que iniciarmos já vamos mostrar um turma
    this.cargo.id_cargo = this.route.snapshot.paramMap.get("id")
    this.mostrarUmCargo()
  }

  mostrarUmCargo(){
    this.cargoService.mostrarUmCargo(this.cargo.id_cargo).subscribe((resultado)=>{ 
      this.cargo = resultado;

    })
  }

  excluirCargo(){
    this.cargoService.excluirCargo(this.cargo.id_cargo).subscribe({
      complete: () => alert("Cargo excluido com sucesso"),
      error: () => alert("Esse cargo possui funcionários vinculados, portanto não pode ser excluída")
    })
    this.router.navigate(['/listaCargo'])
  }

}
