import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PortadaModel } from '../models/portada-model';

@Injectable({
  providedIn: 'root'
})
export class PortadaService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public listar():Observable<PortadaModel[]>{
    return this.http.get<PortadaModel[]>(`${this.apiServerUrl}/portada/listar`)
  }

  public editar(portada:PortadaModel):Observable<PortadaModel>{
    return this.http.put<PortadaModel>(`${this.apiServerUrl}/portada/editar`,portada)
  }

  public agregar(portada:PortadaModel):Observable<PortadaModel>{
    return this.http.put<PortadaModel>(`${this.apiServerUrl}/portada/agregar`,portada)
  }

  public eliminar(id:number):Observable<any>{
    return this.http.delete(`${this.apiServerUrl}/portada/${id}`)
  }
}
