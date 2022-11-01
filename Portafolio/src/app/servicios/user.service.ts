import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';
import { DatosService } from '../datos.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = this.datosService.apiUrl ;

  constructor(private http: HttpClient,private datosService:DatosService) { }

  public editar(usuario:UserModel):Observable<UserModel>{
    return this.http.put<UserModel>(`${this.apiServerUrl}/usuario/editar`,usuario)
  }
}
