import { ExcluirSupervisorComponent } from './componentes/excluir-supervisor/excluir-supervisor.component';
import { EdicaoSupervisorComponent } from './componentes/edicao-supervisor/edicao-supervisor.component';
import { AtribuirCargoSupervisorComponent } from './componentes/atribuir-cargo-supervisor/atribuir-cargo-supervisor.component';
import { AtribuirCargoComponent } from './componentes/atribuir-cargo/atribuir-cargo.component';

import { EditarContraChequeComponent } from './componentes/editar-contra-cheque/editar-contra-cheque.component';
import { ExcluirContraChequeComponent } from './componentes/excluir-contra-cheque/excluir-contra-cheque.component';
import { CadastrarContraChequeComponent } from './componentes/cadastrar-contra-cheque/cadastrar-contra-cheque.component';
import { ListaContrachequesComponent } from './componentes/lista-contracheques/lista-contracheques.component';
import { SupervisorDoCargoComponent } from './componentes/supervisor-do-cargo/supervisor-do-cargo.component';
import { ListaGeralFuncionariosComponent } from './componentes/lista-geral-funcionarios/lista-geral-funcionarios.component';
import { EdicaoFuncionarioComponent } from './componentes/edicao-funcionario/edicao-funcionario.component';
import { ExclusaoFuncionarioComponent } from './componentes/exclusao-funcionario/exclusao-funcionario.component';
import { CadastroFuncionarioComponent } from './componentes/cadastro-funcionario/cadastro-funcionario.component';
import { ListaFuncionarioComponent } from './componentes/lista-funcionario/lista-funcionario.component';
import { ExclusaoCargoComponent } from './componentes/exclusao-cargo/exclusao-cargo.component';
import { CadastroCargoComponent } from './componentes/cadastro-cargo/cadastro-cargo.component';
import { ListaCargoComponent } from './componentes/lista-cargo/lista-cargo.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdicaoCargoComponent } from './componentes/edicao-cargo/edicao-cargo.component';
import { ListaSupervisorComponent } from './componentes/lista-supervisor/lista-supervisor.component';
import { CadastrarSupervisorComponent } from './componentes/cadastrar-supervisor/cadastrar-supervisor.component';


const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"listaCargo", component: ListaCargoComponent},
  {path:"cadastroCargo", component: CadastroCargoComponent},
  {path:"exclusaoCargo/:id", component: ExclusaoCargoComponent},
  {path:"edicaoCargo/:id", component: EdicaoCargoComponent},
  {path:"funcionarioCargo/:id_cargo", component: ListaFuncionarioComponent},
  {path: "funcionarioCadastro/:id_cargo", component: CadastroFuncionarioComponent},
  {path:"funcionario/cadastrar", component:CadastroFuncionarioComponent},
  {path:"exclusaoFuncionario/:ra_funcionario/:id_cargo", component: ExclusaoFuncionarioComponent},
  {path:"funcionario/delete/:ra_funcionario", component:ExclusaoFuncionarioComponent},
  {path:"edicaoFuncionario/:ra_funcionario/:id_cargo", component: EdicaoFuncionarioComponent},
  {path:"funcionario/edicao/:ra_funcionario", component:EdicaoFuncionarioComponent},
  {path: "listaGeralFuncionario", component: ListaGeralFuncionariosComponent},
  {path: "supervisorDocargo/:id_cargo", component:SupervisorDoCargoComponent},
  {path: "supervisao/listaSupervisor", component: ListaSupervisorComponent},
  {path: "supervisor/cadastro", component: CadastrarSupervisorComponent},
  {path: "funcionario/contraCheque/:ra_funcionario", component: ListaContrachequesComponent},
  {path: "funcionario/contraCheque/cadastro/:ra_funcionario", component: CadastrarContraChequeComponent},
  {path: "contraCheque/exclusao/:codigo/:ra_funcionario", component: ExcluirContraChequeComponent },
  {path: "contraCheque/edicao/:codigo/:ra_funcionario", component: EditarContraChequeComponent},
  {path: "funcionario/atribuirCargo/:ra_funcionario/:id_cargo", component: AtribuirCargoComponent},
  {path: "supervisor/atribuirCargo/:id_supervisor", component:AtribuirCargoSupervisorComponent },
  {path: "supervisor/edicao/:id_supervisor", component: EdicaoSupervisorComponent},
  {path: 'supervisor/delete/:id_supervisor', component: ExcluirSupervisorComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
