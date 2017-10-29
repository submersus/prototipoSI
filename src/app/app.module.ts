import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './components/alert/alert.component';


import { AlertService } from "./services/alert.service";
import { UserService } from "./services/user.service";
import { AuthenticationService } from "./services/authentication.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { PacienteService } from "./services/paciente.service";

import { ROUTING } from "./app.routes";
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RpacienteComponent } from './components/rpaciente/rpaciente.component';
import { AsigPacienteComponent } from './components/asig-paciente/asig-paciente.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CrearComponent } from './components/historias/crear/crear.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    HomeComponent,
    InicioComponent,
    RpacienteComponent,
    AsigPacienteComponent,
    PacientesComponent,
    PacienteComponent,
    NavbarComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [
    AlertService,
    UserService,
    AuthenticationService,
    AuthGuardService,
    PacienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
