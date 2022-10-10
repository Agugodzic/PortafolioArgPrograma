import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExperienciaModel } from '../models/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public listar():Observable<ExperienciaModel[]>{
    return this.http.get<ExperienciaModel[]>(`${this.apiServerUrl}/experiencia/listar`)
  }

  public editar(experiencia:ExperienciaModel):Observable<ExperienciaModel>{
    return this.http.put<ExperienciaModel>(`${this.apiServerUrl}/experiencia/editar`,experiencia)
  }

  public agregar(experiencia:ExperienciaModel):Observable<ExperienciaModel>{
    return this.http.put<ExperienciaModel>(`${this.apiServerUrl}/experiencia/agregar`,experiencia)
  }

  public eliminar(id:number):Observable<any>{
    return this.http.delete(`${this.apiServerUrl}/experiencia/${id}`)
  }
}
