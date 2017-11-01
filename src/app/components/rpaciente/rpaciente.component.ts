import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { AlertService } from '../../services/alert.service';
import { PacienteService } from '../../services/paciente.service';
//import the do function to be used with the http library.
import 'rxjs/add/operator/do';
//import the map function to be used with the http library
import 'rxjs/add/operator/map';
const URL = 'http://localhost:8000/api/upload';

@Component({
  selector: 'app-rpaciente',
  templateUrl: './rpaciente.component.html',
  styleUrls: ['./rpaciente.component.css']
})

export class RpacienteComponent implements OnInit {
  model: any = {};
  loading = false;
  currentUser
  semestres =[
    {name:'Sera atendido por el quinto:', value:'no',specify:""},
    {name:'Sera atendido por el Sexto', value:'no',specify:""},
    {name:'Sera atendido por el Septimo', value:'no',specify:""},
    {name:'Sera atendido por el Octavo', value:'no',specify:""},
    {name:'Sera atendido por el Noveno', value:'no',specify:""}
  ]
  values=["si","no"];
  sexos=["Masculino","Femenino"]

  constructor(
    private http: Http,
    private router: Router,
    private alertService: AlertService,
    private pacienteService: PacienteService){
      this.currentUser = JSON.parse(localStorage.getItem('token'));
     }

  ngOnInit() {
  }
  registrarPaciente() {
    this.loading = true;
    this.pacienteService.create(this.model, this.currentUser.token)
    .subscribe(
      data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/pacientes']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            }); 
}

 }

