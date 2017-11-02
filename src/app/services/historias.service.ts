import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class HistoriasService {

  constructor(private http: Http) { }


  create(historia,pacientId,token){

    return this.http.post(`/api/historias?token=${token}`, historia, pacientId);
  }

}


