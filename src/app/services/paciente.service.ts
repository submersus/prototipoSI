import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
@Injectable()
export class PacienteService {

  constructor(private http: Http) { }

  getAll() {
    return this.http.get('/api/paciente').map((response: Response) => response.json());
  }

  getById(_id: string) {
      return this.http.get('/api/paciente/' + _id).map((response: Response) => response.json());
  }

  create(paciente) {
      return this.http.post('/api/paciente/registrar', paciente);
  }

  upload(formData){
    return this.http.request('/api/paciente/upload', formData);
  }


}
