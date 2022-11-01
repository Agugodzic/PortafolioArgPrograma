import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosService } from '../datos.service';
import { HabilidadesModel } from '../models/habilidades.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  private apiServerUrl = this.datosService.apiUrl ;

  constructor(private http: HttpClient,private datosService:DatosService) { }

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
