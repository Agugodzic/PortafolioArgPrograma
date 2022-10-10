import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public editar(usuario:UserModel):Observable<UserModel>{
    return this.http.put<UserModel>(`${this.apiServerUrl}/usuario/editar`,usuario)
  }
}
