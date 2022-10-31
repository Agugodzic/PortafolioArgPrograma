import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosService } from '../datos.service';
import { TerciarioModel } from '../models/terciario-model';

@Injectable({
  providedIn: 'root'
})
export class TerciarioService {

  private apiServerUrl = this.datosService.apiUrl ;

  constructor(private http: HttpClient,private datosService:DatosService) { }

  public listar():Observable<TerciarioModel[]>{
    return this.http.get<TerciarioModel[]>(`${this.apiServerUrl}/titulo-terciario/listar`)
  }

  public editar(titulo:TerciarioModel):Observable<TerciarioModel>{
    return this.http.put<TerciarioModel>(`${this.apiServerUrl}/titulo-terciario/editar`,titulo)
  }

  public agregar(titulo:TerciarioModel):Observable<TerciarioModel>{
    return this.http.put<TerciarioModel>(`${this.apiServerUrl}/titulo-terciario/agregar`,titulo)
  }

 public eliminar(id:number):Observable<any>{
  return this.http.delete(`${this.apiServerUrl}/titulo-terciario/${id}`)
 }

}
