import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatosService } from '../datos.service';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  currentUserSubject: BehaviorSubject<any>;
  private apiServerUrl = this.datosService.apiUrl ;

  constructor(private http: HttpClient,private datosService:DatosService){
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('token') || '{}')
    );
  }

  IniciarSesion(credenciales: any): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/login`, credenciales).pipe(
      map((data) => {
        sessionStorage.setItem('token', JSON.stringify(data));
        this.currentUserSubject.next(data);
        return data;
      })
    );
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }

  loggedIn() {
    return sessionStorage.getItem('token') !== null;
  }

  logoutUser() {
    sessionStorage.clear();
    localStorage.clear();

    this.currentUserSubject.next(null);
    alert('Has finalizado la sesion.');
  }
}
