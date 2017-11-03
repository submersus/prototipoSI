import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {PacienteService} from '../../services/paciente.service'

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  currentUser;
  paciente;
  _id;
  constructor(private activatedRoute:ActivatedRoute,
              private router:Router,
              private pacienteService:PacienteService) {
}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this._id= params['id'];
  });

  this.buscarPaciente();
  }

  private buscarPaciente(){
    this.pacienteService.getById(this._id,JSON.parse(localStorage.getItem('token')).token).subscribe(paciente => { this.paciente = paciente; console.log(paciente)});
  }

}
