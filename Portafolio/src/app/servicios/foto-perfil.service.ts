import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosService } from '../datos.service';
import { FotoPerfilModel } from '../models/foto-perfil-model';

@Injectable({
  providedIn: 'root'
})
export class FotoPerfilService {
  private apiServerUrl = this.datosService.apiUrl ;

  constructor(private http: HttpClient,private datosService:DatosService) { }

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
