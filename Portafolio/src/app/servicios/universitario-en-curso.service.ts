import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UniversitarioEnCursoModel } from '../models/universitario-en-curso-model';

@Injectable({
  providedIn: 'root'
})

export class UniversitarioEnCursoService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public listar():Observable<UniversitarioEnCursoModel[]>{
    return this.http.get<UniversitarioEnCursoModel[]>(`${this.apiServerUrl}/universitario-en-curso/listar`)
 }

 public editar(carrera:UniversitarioEnCursoModel):Observable<UniversitarioEnCursoModel>{
  return this.http.put<UniversitarioEnCursoModel>(`${this.apiServerUrl}/universitario-en-curso/editar`,carrera)
}

public agregar(carrera:UniversitarioEnCursoModel):Observable<UniversitarioEnCursoModel>{
  return this.http.put<UniversitarioEnCursoModel>(`${this.apiServerUrl}/universitario-en-curso/agregar`,carrera)
}

 public eliminar(id:number):Observable<any>{
  return this.http.delete(`${this.apiServerUrl}/universitario-en-curso/${id}`)
 }

}
