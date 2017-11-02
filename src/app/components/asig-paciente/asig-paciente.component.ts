import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'
import { PacienteService } from '../../services/paciente.service';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-asig-paciente',
  templateUrl: './asig-paciente.component.html',
  styleUrls: ['./asig-paciente.component.css']
})
export class AsigPacienteComponent implements OnInit {
  pacient
  currentUser;
  users = [];

  constructor(private activatedRoute: ActivatedRoute,
              private pacienteService: PacienteService,
              private alertService: AlertService,
              private router: Router,
              private userService: UserService) {
                
              }

  ngOnInit() {
    this.loadAllUsers();

    this.activatedRoute.params.subscribe(params => {
      this.pacient = this.pacienteService.getById(params['id'],JSON.parse(localStorage.getItem('token')).token).subscribe(paciente=>{this.pacient =paciente;});
    console.log(this.pacient);          
               });
  }


private loadAllUsers() {
  this.userService.getAll(JSON.parse(localStorage.getItem('token')).token).subscribe(users => { this.users = users; });
}

asignarPaciente(userId){
  this.pacienteService.asignarPaciente(this.pacient._id,userId,JSON.parse(localStorage.getItem('token')).token)
  .subscribe(
    data => {
              this.alertService.success('Asignado correctamente', true);
              this.router.navigate(['/pacientes']);
          },
          error => {
              this.alertService.error(error);
          }); 
}


}