import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
@Injectable()
export class PacienteService {

  pacientes: any[] =[];
  constructor(private http: Http) {

   }

  getAll(currentUser) {
    return this.http.get('/api/pacientes').map((response: Response) => response.json());
  }

  getById(_id: string) {
      return this.http.get('/api/pacientes/' + _id).map((response: Response) => response.json());
  }

  create(paciente) {
      return this.http.post('/api/pacientes', paciente);
  }

  upload(formData){
    return this.http.request('/api/paciente/upload', formData);
  }

  buscarPaciente( listaPacientes, termino: string) {
    let pacientesArr: any[] = [];
    termino = termino.toLowerCase();
    this.pacientes = listaPacientes

    for ( let paciente of this.pacientes) {
        let nombre = paciente.nombre.toLowerCase();
        if ( nombre.indexOf( termino ) >= 0 ) {
            pacientesArr.push( paciente );
        }
    }
    return pacientesArr;
}


}
