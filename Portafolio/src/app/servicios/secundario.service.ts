import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SecundarioModel } from '../models/secundario-model';

@Injectable({
  providedIn: 'root'
})
export class SecundarioService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public listar():Observable<SecundarioModel[]>{
    return this.http.get<SecundarioModel[]>(`${this.apiServerUrl}/secundario/listar`)
 }

 public editar(titulo:SecundarioModel):Observable<SecundarioModel>{
  return this.http.put<SecundarioModel>(`${this.apiServerUrl}/secundario/listar`,titulo)
}

 public eliminar(id:number):Observable<any>{
  return this.http.delete(`${this.apiServerUrl}/secundario/${id}`)
 }

}
