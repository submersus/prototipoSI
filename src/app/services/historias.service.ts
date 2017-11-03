import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class HistoriasService {

  constructor(private http: Http) { }


  create(historia,pacientId,userid,token){

    return this.http.post(`/api/historias?token=${token}&patientId=${pacientId}&userId=${userid}`, historia);
  }

  getHistoria(_id,token){
    return this.http.get(`/api/historias/${_id}?token=${token}`).map((response: Response) => response.json());
  }

}


