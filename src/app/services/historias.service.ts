import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class HistoriasService {

  constructor(private http: Http) { }


  create(historia){

    return this.http.post('/api/historias',historia);
  }

}

