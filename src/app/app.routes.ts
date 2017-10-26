import { Routes, RouterModule } from '@angular/router';
/* components */
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { AsigPacienteComponent } from './components/asig-paciente/asig-paciente.component';
import { RpacienteComponent } from './components/rpaciente/rpaciente.component';
/* Services */
import { AuthGuardService } from "./services/auth-guard.service"

const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: InicioComponent, canActivate:[AuthGuardService]},
  { path: 'rpaciente', component: RpacienteComponent, canActivate:[AuthGuardService]},
  { path: 'apaciente', component: AsigPacienteComponent, canActivate:[AuthGuardService]},
  { path: 'pacientes', component: PacientesComponent, canActivate:[AuthGuardService]},
  { path: 'register', component: RegisterComponent },
  {path:'**', pathMatch:'full', redirectTo: ''}
];

export const ROUTING = RouterModule.forRoot(ROUTES);
