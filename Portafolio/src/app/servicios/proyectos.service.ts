import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProyectosModel } from '../models/proyectos-model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private apiServerUrl = "https://portafolio-back-ap.herokuapp.com";
  constructor(private http: HttpClient) { }

  public listar():Observable<ProyectosModel[]>{
    return this.http.get<ProyectosModel[]>(`${this.apiServerUrl}/proyectos/listar`)
 }

 public editar(proyecto:ProyectosModel):Observable<ProyectosModel>{
  return this.http.put<ProyectosModel>(`${this.apiServerUrl}/proyectos/editar`,proyecto)
 }

 public agregar(proyecto:ProyectosModel):Observable<ProyectosModel>{
  return this.http.put<ProyectosModel>(`${this.apiServerUrl}/proyectos/agregar`, proyecto)
 }

 public eliminar(id:number):Observable<any>{
  return this.http.delete(`${this.apiServerUrl}/proyectos/${id}`)
 }

}
