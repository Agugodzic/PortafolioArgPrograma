import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosService } from '../datos.service';
import { UniversitarioModel } from '../models/universitario-model';

@Injectable({
  providedIn: 'root'
})
export class UniversitarioService {

  private apiServerUrl = this.datosService.apiUrl ;

  constructor(private http: HttpClient,private datosService:DatosService) { }

  public listar():Observable<UniversitarioModel[]>{
    return this.http.get<UniversitarioModel[]>(`${this.apiServerUrl}/titulo-universitario/listar`)
 }

 public editar(titulo:UniversitarioModel):Observable<UniversitarioModel>{
  return this.http.put<UniversitarioModel>(`${this.apiServerUrl}/titulo-universitario/editar`,titulo)
}

public agregar(titulo:UniversitarioModel):Observable<UniversitarioModel>{
  return this.http.put<UniversitarioModel>(`${this.apiServerUrl}/titulo-universitario/agregar`,titulo)
}

 public eliminar(id:number):Observable<any>{
  return this.http.delete(`${this.apiServerUrl}/titulo-universitario/${id}`)
 }

}
