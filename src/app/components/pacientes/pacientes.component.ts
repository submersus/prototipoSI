import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  pacientes: any[]=[]
  currentUser;
  constructor(private pacienteService: PacienteService) {
    this.currentUser = JSON.parse(localStorage.getItem('token'));
   }

  ngOnInit() {
    this.loadAllPacientes();
  }

  private loadAllPacientes() {

    this.pacienteService.getAll(this.currentUser.token).subscribe(pacientes => { this.pacientes = pacientes; });
}

}
