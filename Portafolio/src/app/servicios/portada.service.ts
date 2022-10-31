import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';import { DatosService } from '../datos.service';
;
import { PortadaModel } from '../models/portada-model';

@Injectable({
  providedIn: 'root'
})
export class PortadaService {
  private apiServerUrl = this.datosService.apiUrl ;

  constructor(private http: HttpClient,private datosService:DatosService) { }

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
