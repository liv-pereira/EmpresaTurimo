import { ActivatedRoute, Router } from '@angular/router';
import { SupervisorService } from 'src/app/services/supervisor.service';
import { Component, OnInit } from '@angular/core';
import { Supervisor } from 'src/app/supervisorModel';

@Component({
  selector: 'app-excluir-supervisor',
  templateUrl: './excluir-supervisor.component.html',
  styleUrls: ['./excluir-supervisor.component.css']
})
export class ExcluirSupervisorComponent implements OnInit {



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

  excluirSupervisor(){
    this.supervisorService.deletarSupervisor(this.supervisor.id_supervisor).subscribe({
      complete: () => { alert("Supervisor excuído com sucesso")
                        this.router.navigate(['/listaSupervisor'])},
      error: () => { alert("Erro ao excluir o supervisor")
                    this.router.navigate(['/listaSupervisor']) },
      next: () => { console.log("Supervisor excluido com sucesso")}

      });
  }
  cancelarExclusao(){
    this.router.navigate(['/listaSupervisor'])
  }

}
