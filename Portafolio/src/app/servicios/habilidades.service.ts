import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HabilidadesModel } from '../models/habilidades.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public listar():Observable<HabilidadesModel[]>{
    return this.http.get<HabilidadesModel[]>(`${this.apiServerUrl}/habilidades/listar`)
 }

 public editar(curso:HabilidadesModel):Observable<HabilidadesModel>{
  return this.http.put<HabilidadesModel>(`${this.apiServerUrl}/habilidades/editar`,curso)
 }

 public agregar(curso:HabilidadesModel):Observable<HabilidadesModel>{
  return this.http.put<HabilidadesModel>(`${this.apiServerUrl}/habilidades/agregar`,curso)
 }

 public eliminar(id:number):Observable<any>{
  return this.http.delete(`${this.apiServerUrl}/habilidades/${id}`)
 }
}
