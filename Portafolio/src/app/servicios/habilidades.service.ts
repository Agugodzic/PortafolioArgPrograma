import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HabilidadesModel } from '../models/habilidades.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  private apiServerUrl = "https://portafolio-back-ap.herokuapp.com";
  constructor(private http: HttpClient) { }

  public listar():Observable<HabilidadesModel[]>{
    return this.http.get<HabilidadesModel[]>(`${this.apiServerUrl}/habilidades/listar`)
 }

 public editar(habilidad:HabilidadesModel):Observable<HabilidadesModel>{
  return this.http.put<HabilidadesModel>(`${this.apiServerUrl}/habilidades/editar`,habilidad)
 }

 public agregar(habilidad:HabilidadesModel):Observable<HabilidadesModel>{
  return this.http.put<HabilidadesModel>(`${this.apiServerUrl}/habilidades/agregar`,habilidad)
 }

 public eliminar(id:number):Observable<any>{
  return this.http.delete(`${this.apiServerUrl}/habilidades/${id}`)
 }
}
