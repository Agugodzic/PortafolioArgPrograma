import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CursoModel } from '../models/curso-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

 public listarCursos():Observable<CursoModel[]>{
    return this.http.get<CursoModel[]>(`${this.apiServerUrl}/cursos/listar`)
 }

 public editarCursos(curso:CursoModel):Observable<CursoModel>{
  return this.http.put<CursoModel>(`${this.apiServerUrl}/cursos/listar`,curso)
}

 public eliminarCurso(id:number):Observable<any>{
  return this.http.delete(`${this.apiServerUrl}/cursos/${id}`)
 }
}