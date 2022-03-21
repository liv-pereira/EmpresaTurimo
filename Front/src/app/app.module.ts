import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ListaCargoComponent } from './componentes/lista-cargo/lista-cargo.component';
import { HomeComponent } from './componentes/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { CadastroCargoComponent } from './componentes/cadastro-cargo/cadastro-cargo.component';
import { FormsModule } from '@angular/forms';
import { ExclusaoCargoComponent } from './componentes/exclusao-cargo/exclusao-cargo.component';
import { EdicaoCargoComponent } from './componentes/edicao-cargo/edicao-cargo.component';
import { ListaFuncionarioComponent } from './componentes/lista-funcionario/lista-funcionario.component';
import { SupervisorDoCargoComponent } from './componentes/supervisor-do-cargo/supervisor-do-cargo.component';
import { CadastroFuncionarioComponent } from './componentes/cadastro-funcionario/cadastro-funcionario.component';
import { ExclusaoFuncionarioComponent } from './componentes/exclusao-funcionario/exclusao-funcionario.component';
import { EdicaoFuncionarioComponent } from './componentes/edicao-funcionario/edicao-funcionario.component';
import { ListaGeralFuncionariosComponent } from './componentes/lista-geral-funcionarios/lista-geral-funcionarios.component';
import { ListaSupervisorComponent } from './componentes/lista-supervisor/lista-supervisor.component';
import { CadastrarSupervisorComponent } from './componentes/cadastrar-supervisor/cadastrar-supervisor.component';
import { LoginComponent } from './componentes/login/login.component';
import { ListaContrachequesComponent } from './componentes/lista-contracheques/lista-contracheques.component';
import { CurrencyPipe, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CadastrarContraChequeComponent } from './componentes/cadastrar-contra-cheque/cadastrar-contra-cheque.component';
import { NgxCurrencyModule } from "ngx-currency";
import { ExcluirContraChequeComponent } from './componentes/excluir-contra-cheque/excluir-contra-cheque.component';
import { EditarContraChequeComponent } from './componentes/editar-contra-cheque/editar-contra-cheque.component';
import { ExcluirSupervisorComponent } from './componentes/excluir-supervisor/excluir-supervisor.component';
import { AtribuirCargoComponent } from './componentes/atribuir-cargo/atribuir-cargo.component';

import { AtribuirCargoSupervisorComponent } from './componentes/atribuir-cargo-supervisor/atribuir-cargo-supervisor.component';
import { CardsColaboradoresComponent } from './componentes/cards-colaboradores/cards-colaboradores.component';
import { EdicaoSupervisorComponent } from './componentes/edicao-supervisor/edicao-supervisor.component';

registerLocaleData(localePt)

//lembrar de quando usar o pipe a importar algumas bibliotecas e usar o providers

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListaCargoComponent,
    HomeComponent,
    CadastroCargoComponent,
    ExclusaoCargoComponent,
    EdicaoCargoComponent,
    ListaFuncionarioComponent,
    SupervisorDoCargoComponent,
    CadastroFuncionarioComponent,
    ExclusaoFuncionarioComponent,
    EdicaoFuncionarioComponent,
    ListaGeralFuncionariosComponent,
    ListaSupervisorComponent,
    CadastrarSupervisorComponent,
    LoginComponent,
    ListaContrachequesComponent,
    CadastrarContraChequeComponent,
    ExcluirContraChequeComponent,
    EditarContraChequeComponent,
    ExcluirSupervisorComponent,
    AtribuirCargoComponent,
   
    AtribuirCargoSupervisorComponent,
        CardsColaboradoresComponent,
        EdicaoSupervisorComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   FormsModule,
   NgxCurrencyModule

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: "pt-BR"
  }, { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
