import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InfoModel } from '../models/info-model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public listar():Observable<InfoModel[]>{
    return this.http.get<InfoModel[]>(`${this.apiServerUrl}/datos/listar`)
  }

  public editar(experiencia:InfoModel):Observable<InfoModel>{
    return this.http.put<InfoModel>(`${this.apiServerUrl}/datos/editar`,experiencia)
  }

  public agregar(experiencia:InfoModel):Observable<InfoModel>{
    return this.http.put<InfoModel>(`${this.apiServerUrl}/datos/agregar`,experiencia)
  }

  public eliminar(id:number):Observable<any>{
    return this.http.delete(`${this.apiServerUrl}/datos/${id}`)
  }
}
