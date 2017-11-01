import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
@Injectable()
export class PacienteService {
  
  pacientes: any[] =[];
  constructor(private http: Http) {

   }

  getAll(currentUser) {
    return this.http.get(`/api/pacientes?token=${currentUser}`).map((response: Response) => response.json());
  }

  getById(_id, currentUser) {
      console.log(_id,currentUser);
      return this.http.get(`/api/pacientes/${_id}?token=${currentUser}`).map((response: Response) => response.json());
  }

  create(paciente,currentUser) {
      return this.http.post(`/api/pacientes?token=${currentUser}`, paciente);
  }

  asignarPaciente(pacientId,userId,currentUser){
      return this.http.post(`/api/pacientes/${pacientId}/usuarios/${userId}?token=${currentUser}`,pacientId,userId);
  }



}
