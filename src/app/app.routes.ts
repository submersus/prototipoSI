import { Routes, RouterModule } from '@angular/router';
/* components */
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
/* Services */
//import { AuthGuardService } from "./services/auth-guard.service";

const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'**', pathMatch:'full', redirectTo: 'login'}
];

export const ROUTING = RouterModule.forRoot(ROUTES);
