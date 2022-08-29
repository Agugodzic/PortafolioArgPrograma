import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { experienciaModel } from '../models/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public listar():Observable<experienciaModel[]>{
    return this.http.get<experienciaModel[]>(`${this.apiServerUrl}/experiencia/listar`)
 }

 public editar(curso:experienciaModel):Observable<experienciaModel>{
  return this.http.put<experienciaModel>(`${this.apiServerUrl}/experiencia/listar`,curso)
}

 public eliminar(id:number):Observable<any>{
  return this.http.delete(`${this.apiServerUrl}/experiencia/${id}`)
 }
}
