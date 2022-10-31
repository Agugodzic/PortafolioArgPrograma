import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosService } from '../datos.service';
import { UniversitarioEnCursoModel } from '../models/universitario-en-curso-model';

@Injectable({
  providedIn: 'root'
})

export class UniversitarioEnCursoService {

  private apiServerUrl = this.datosService.apiUrl ;

  constructor(private http: HttpClient,private datosService:DatosService) { }

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
