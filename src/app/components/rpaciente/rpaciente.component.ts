import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('fileInput') fileInput;

  constructor(
    private http: Http,
    private router: Router,
    private alertService: AlertService,
    private pacienteService: PacienteService){ }

  ngOnInit() {
  }
  registrarPaciente() {
    this.loading = true;
    this.pacienteService.create(this.model)
    .subscribe(
      data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/inicio']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            }); 
}
upload() {
  //locate the file element meant for the file upload.
  let fileBrowser = this.fileInput.nativeElement;
  let formData = new FormData();
  if (fileBrowser.files && fileBrowser.files[0]) {
    const formData = new FormData();
    formData.append("image", fileBrowser.files[0]);
    this.pacienteService.upload(formData).subscribe(
      res => {       
        this.alertService.success('upload successful', true);
      },
      error => {
        this.alertService.error(error);
      })
    } 
  
  }
 }

