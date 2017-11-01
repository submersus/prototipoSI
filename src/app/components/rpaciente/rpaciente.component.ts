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
    {name:'Quinto', value:'5', checked:false},
    {name:'Sexto', value:'6', checked:false},
    {name:'Septimo', value:'7', checked:false},
    {name:'Octavo', value:'8', checked:false},
    {name:'Noveno', value:'9', checked:false}
  ]
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

