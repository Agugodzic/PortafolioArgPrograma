import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = "https://portafolio-back-ap.herokuapp.com";
  constructor(private http: HttpClient) { }

  public editar(usuario:UserModel):Observable<UserModel>{
    return this.http.put<UserModel>(`${this.apiServerUrl}/usuario/editar`,usuario)
  }
}
