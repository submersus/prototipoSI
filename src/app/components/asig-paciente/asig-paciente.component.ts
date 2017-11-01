import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PacienteService } from '../../services/paciente.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-asig-paciente',
  templateUrl: './asig-paciente.component.html',
  styleUrls: ['./asig-paciente.component.css']
})
export class AsigPacienteComponent implements OnInit {
  currentUser;
  users = [];

  constructor(private pacienteService: PacienteService,
              private userService: UserService) {
              
    this.currentUser = JSON.parse(localStorage.getItem('token'));
               }

  ngOnInit() {
    this.loadAllUsers();
  }

private loadAllUsers() {
  this.userService.getAll(this.currentUser.token).subscribe(users => { this.users = users; });
}

asignar(){
  
}


}
