import { Component, OnInit,ViewChild } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ActivatedRoute,Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { AlertService } from '../../../services/alert.service';
import { PacienteService  } from '../../../services/paciente.service';
import { HistoriasService  } from '../../../services/historias.service';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  currentUser;
  loading: boolean = false;
  paciente:any = { };
  uploader:FileUploader = new FileUploader({url:`/api/pacientes/${this.paciente._id}/upload?token=${JSON.parse(localStorage.getItem('token')).token}`});  

  preguntas= [{
      nombre:"¿Alteraciones cardiovasculares?",
      valor:"no",
      especifique:"",
    },
    {
      nombre:"¿Hemorragias o sangrados frecuentes?",
      valor:"no",
      especifique:"",
    },
    {
      nombre:"¿Anemia u otra alteracion sanguinea?",
      valor:"no",
      especifique:"",
    },
    {
      nombre:"¿Enfermedades renales?",
      valor:"no",
      especifique:"",
    },
    {
      nombre:"¿Enfermedades epaticas?",
      valor:"no",
      especifique:"",
    },
    {
      nombre:"¿Asma o alguna enfermedad para respirar?",
      valor:"no",
      especifique:""
    },
    {
      nombre:"¿Enfermedades Respiratorias?",
      valor:"no",
      especifique:""
    },
    {
      nombre:"¿Diabetes Mellitus?",
      valor:"no",
      especifique:""
    },
    {
      nombre:"¿hipertension?",
      valor:"no",
      especifique:""
    },
    {
      nombre:"¿Dolores de cabeza frecuentes,migrañas, jaquecas?",
      valor:"no",
      especifique:""
    },
    {
      nombre:"¿Fiebre reumatica?",
      valor:"no",
      especifique:""
    },
    {
      nombre:"¿Enfermedades infecciosas?",
      valor:"no",
      especifique:""
    },
    {
      nombre:"¿Enfermedades de transmision sexual?",
      valor:"no",
      especifique:""
    },
    {
      nombre:"¿Enfermedades gastrointestinales?",
      valor:"no",
      especifique:""
    },
    {
      nombre:"¿Dolores de oidos frecuentes o zumbidos?",
      valor:"no",
      especifique:""
    },
    {
      nombre:"¿Se le inflaman los pies o las articulaciones frecuentemente?",
      valor:"no",
      especifique:""
    },
    {
      nombre:"¿Enfermedades de los senos paranasales (sinusitis)?",
      valor:"no",
      especifique:""
    },
    {
      nombre:"¿Respirador bucal?",
      valor:"no",
      especifique:""
    },
    {
      nombre:"¿Padece usted alguna enfermedad congenita?",
      valor:"no",
      especifique:""
    },
    {
      nombre:"¿Tiene algun tipo de desarreglo hormonal?",
      valor:"no",
      especifique:""
    },
    {
      nombre:"¿Alguna vez ha estado gravemente enfermo?",
      valor:"no",
      especifique:""
    },
    {
      nombre:"¿Ha sido intervenido quirurgicamente?",
      valor:"no",
      especifique:""
    },
    {
      nombre:"¿Toma mas de ocho vasos de agua al dia?",
      valor:"no",
      especifique:""
    },
    {
      nombre:"¿Toma frecuentemente aspira o similar?",
      valor:"no",
      especifique:""
    },]

  valores = ["si","no"];

  constructor( private activatedRoute: ActivatedRoute,
               private historiasService: HistoriasService,
               private router: Router,
               private pacienteService: PacienteService) {
                 
   
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.paciente = this.pacienteService.getById(params['id'], JSON.parse(localStorage.getItem('token')).token).subscribe(paciente => { this.paciente = paciente; });
    })
  }

  guardarHistoria(){
    console.log(this.preguntas)
    console.log("este es el paciente que te envio",this.paciente._id)
    this.historiasService.create(this.preguntas,this.paciente._id, JSON.parse(localStorage.getItem('token')).token).subscribe(
      data=>{
        this.router.navigate(['/home']);
      },error=>{
        console.log(error);
      }
    )
  }


}
