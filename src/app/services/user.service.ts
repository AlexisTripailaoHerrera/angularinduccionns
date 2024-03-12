import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pagination } from '../models/pagination.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public headers = new HttpHeaders().set('Content-Type', 'application/json');
  url: string;

  constructor(public _http: HttpClient,) {
    this.url = "https://reqres.in/api/"
  }

  //devolverá un observable de tipo pagination
  getUsers(pageNumber: any): Observable<Pagination> {
    return this._http.get<Pagination>(this.url + "users?page=" + pageNumber);
  }

  //crear un usuario || devolverá un observable de tipo User
  createUser(par: User): Observable<User> {
    let params = JSON.stringify(par);
    return this._http.post<User>(this.url + "users", params, { headers: this.headers });
  }

  //actualizar un usuario según su número id || devolverá un observable de tipo User
  updateUser(id: any, par: User): Observable<User> {

    //transformo el objeto a un json string
    let params = JSON.stringify(par);

    //paso por parámetro la url, los parametros del cuerpo de la petición y la cabecera de la petición
    return this._http.put<User>(this.url + "users/" + id, params, { headers: this.headers });
  }

  //borrar un usuario || devolverá un observable de tipo User
  deleteUser(id: any): Observable<User> {
    return this._http.delete<User>(this.url + "users/" + id, { headers: this.headers });
  }

}

