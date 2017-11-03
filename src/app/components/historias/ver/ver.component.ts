import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../services/paciente.service';
import { HistoriasService } from '../../../services/historias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {
  _id;
  paciente;
  preguntas;
  valores;
  constructor(private activatedRoute: ActivatedRoute,
    private historiasService: HistoriasService,
    private router: Router,
    private pacienteService: PacienteService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this._id = params['id'];
    });

    this.buscarPaciente();
  }

  private buscarPaciente() {
    this.pacienteService.getById(this._id, JSON.parse(localStorage.getItem('token')).token).subscribe(paciente => { this.paciente = paciente; console.log(paciente) });
  }

  private buscarHistoria(){
    this.historiasService.getHistoria(this._id,JSON.parse(localStorage.getItem('token')).token)
  }

}
