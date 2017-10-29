import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteService  } from '../../../services/paciente.service';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  paciente:any = {};
  model: any = {};
  constructor( private activatedRoute: ActivatedRoute,
               private pacienteService: PacienteService) {

    this.activatedRoute.params.subscribe(params => {
      this.paciente = this.pacienteService.getById(params['id']);
    })

  }

  ngOnInit() {
  }

}
