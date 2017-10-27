import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-asig-paciente',
  templateUrl: './asig-paciente.component.html',
  styleUrls: ['./asig-paciente.component.css']
})
export class AsigPacienteComponent implements OnInit {

  pacientes:any[]=[];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
    this.loadAllPacientes()
  }

private loadAllPacientes() {
  this.pacienteService.getAll().subscribe(pacientes => { this.pacientes = pacientes; });
}

}
