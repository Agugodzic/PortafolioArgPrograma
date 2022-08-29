import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TerciarioModel } from '../models/terciario-model';

@Injectable({
  providedIn: 'root'
})
export class TerciarioService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public listar():Observable<TerciarioModel[]>{
    return this.http.get<TerciarioModel[]>(`${this.apiServerUrl}/terciario/listar`)
 }

 public editar(titulo:TerciarioModel):Observable<TerciarioModel>{
  return this.http.put<TerciarioModel>(`${this.apiServerUrl}/terciario/listar`,titulo)
}

 public eliminar(id:number):Observable<any>{
  return this.http.delete(`${this.apiServerUrl}/terciario/${id}`)
 }

}
