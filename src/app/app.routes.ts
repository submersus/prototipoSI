import { Routes, RouterModule } from '@angular/router';
/* components */
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { AsigPacienteComponent } from './components/asig-paciente/asig-paciente.component';
import { RpacienteComponent } from './components/rpaciente/rpaciente.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { HomeComponent } from './components/home/home.component';
import { CrearComponent } from './components/historias/crear/crear.component';
/* Services */
import { AuthGuardService } from "./services/auth-guard.service"

const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: InicioComponent, canActivate:[AuthGuardService]},
  { path: 'perfil', component: HomeComponent, canActivate:[AuthGuardService]},
  { path: 'rpaciente', component: RpacienteComponent, canActivate:[AuthGuardService]},
  { path: 'apaciente/:id', component: AsigPacienteComponent, canActivate:[AuthGuardService]},
  { path: 'pacientes', component: PacientesComponent, canActivate:[AuthGuardService] },
  { path: 'paciente/:id', component: PacienteComponent, canActivate:[AuthGuardService] },
  { path: 'crear/:id', component: CrearComponent, canActivate:[AuthGuardService] },
  {path:'**', pathMatch:'full', redirectTo: '/login'}
];

export const ROUTING = RouterModule.forRoot(ROUTES);
