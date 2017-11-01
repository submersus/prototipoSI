import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

    
  getAll(CurrentUser) {
    return this.http.get('/api/usuarios?token='+ CurrentUser).map((response: Response) => response.json());
  }

  getById(_id: string, CurrentUser) {
      return this.http.get('/api/usuarios/' + _id +'/?token='+ CurrentUser).map((response: Response) => response.json());
  }

  create(user) {
      return this.http.post('/api/registrar', user);
  }


}
