import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  pacientes: any[]=[
    {
      id: 12345678910,
      firstname:"ivan",
      lastname:"de menezes",
      edad: "20",
      fechanacimiento: "31-01-1998",
      fecharegistro:"10-10-2017",
      gender:"Masculino",
      telefono:"1234569123",
      cedula:"12345678910"
    }
  ]
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
