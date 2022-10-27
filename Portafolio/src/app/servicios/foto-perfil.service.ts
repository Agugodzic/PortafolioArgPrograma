import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FotoPerfilModel } from '../models/foto-perfil-model';

@Injectable({
  providedIn: 'root'
})
export class FotoPerfilService {

  private apiServerUrl = "https://portafolio-back-ap.herokuapp.com";
  constructor(private http: HttpClient) { }

  public listar():Observable<FotoPerfilModel[]>{
    return this.http.get<FotoPerfilModel[]>(`${this.apiServerUrl}/foto-perfil/listar`)
  }

  public agregar(fotoPerfil:FotoPerfilModel):Observable<FotoPerfilModel>{
    return this.http.put<FotoPerfilModel>(`${this.apiServerUrl}/foto-perfil/agregar`,fotoPerfil)
  }

  public eliminar(id:number):Observable<any>{
    return this.http.delete(`${this.apiServerUrl}/foto-perfil/${id}`)
  }
}
