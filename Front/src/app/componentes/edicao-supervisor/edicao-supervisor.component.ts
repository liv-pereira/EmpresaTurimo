import { ActivatedRoute, Router } from '@angular/router';
import { SupervisorService } from './../../services/supervisor.service';
import { Component, OnInit } from '@angular/core';
import { Supervisor } from 'src/app/supervisorModel';

@Component({
  selector: 'app-edicao-supervisor',
  templateUrl: './edicao-supervisor.component.html',
  styleUrls: ['./edicao-supervisor.component.css']
})
export class EdicaoSupervisorComponent implements OnInit {

  supervisor:Supervisor ={
    id_supervisor: '',
    sup_nome:'',
    sup_setor:'',
    sup_foto:''
  }

  constructor(private supervisorService: SupervisorService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.supervisor.id_supervisor = this.route.snapshot.paramMap.get('id_supervisor')
    this.buscarUmSupervisor()
  }

  buscarUmSupervisor(){
    this.supervisorService.buscarUmSupervisor(this.supervisor.id_supervisor).subscribe((resultado)=>{
      this.supervisor = resultado
    })
  }


  editarSupervisor(){
    this.supervisorService.editarSupervisor(this.supervisor,this.supervisor.id_supervisor).subscribe({
    complete: () => { alert("Supervisor editado com sucesso")
                      this.router.navigate([`/listaSupervisor`])},
    error: () => { alert("Supervisor não editado")
                      this.router.navigate(['/listaSupervisor']) },
    next: () => { console.log("Supervisor cadastrado com sucesso")}

    });

  }

  cancelarEdicao(){
    this.router.navigate(['/listaSupervisor'])
  }

}
