import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/cargoModel';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-edicao-cargo',
  templateUrl: './edicao-cargo.component.html',
  styleUrls: ['./edicao-cargo.component.css']
})
export class EdicaoCargoComponent implements OnInit {

  cargo: Cargo = {
    id_cargo: "",
    car_descricao:"",
    car_nome: ""
  }

  constructor(private cargoService: CargoService,
    private route: ActivatedRoute,
    private router: Router

    ) { }

  ngOnInit(): void {
    //pegar o id da turma que estamos editando que vai passar lá na 
    //através da bibliteca route conseguimos pegar qual id foi passado como parametro lá na URL
    this.cargo.id_cargo = this.route.snapshot.paramMap.get('id')
this.mostrarUmCargo();
  }

  mostrarUmCargo(){
    this.cargoService.mostrarUmCargo(this.cargo.id_cargo).subscribe((resultado)=>{ 
      this.cargo = resultado;

    })
  }

  editarCargo(){
    this.cargoService.editarCargo(this.cargo).subscribe({
      complete: () => alert("Cargo editado com sucesso"),
      error: () => alert("Erro: Cargo não pode ser editada")
    })
    this.router.navigate(['/listaCargo'])
  }

}
