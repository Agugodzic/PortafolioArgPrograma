import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UniversitarioModel } from '../models/universitario-model';

@Injectable({
  providedIn: 'root'
})
export class UniversitarioService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public listar():Observable<UniversitarioModel[]>{
    return this.http.get<UniversitarioModel[]>(`${this.apiServerUrl}/universitario/listar`)
 }

 public editar(titulo:UniversitarioModel):Observable<UniversitarioModel>{
  return this.http.put<UniversitarioModel>(`${this.apiServerUrl}/universitario/listar`,titulo)
}

 public eliminar(id:number):Observable<any>{
  return this.http.delete(`${this.apiServerUrl}/universitario/${id}`)
 }

}
