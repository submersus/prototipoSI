import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

    
  getAll() {
    return this.http.get('/api/usuarios').map((response: Response) => response.json());
  }

  getById(_id: string) {
      return this.http.get('/api/usuarios/' + _id).map((response: Response) => response.json());
  }

  create(user) {
      return this.http.post('/api/registrar', user);
  }


}
