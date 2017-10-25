import { Routes, RouterModule } from '@angular/router';
/* components */
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
/* Services */
import { AuthGuard } from "./auth.guard";

const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: InicioComponent, canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent },
  {path:'**', pathMatch:'full', redirectTo: ''}
];

export const ROUTING = RouterModule.forRoot(ROUTES);
