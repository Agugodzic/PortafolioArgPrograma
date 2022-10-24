import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private url = 'http://localhost:8080';
  private currentUserSubject: BehaviorSubject<any>;
  private _parcero = new BehaviorSubject<boolean>(false);
  public parcero = this._parcero.asObservable();

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
    const token = localStorage.getItem('currentUser');
    this._parcero.next(!!token)
  }

  IniciarSesion(credenciales: any): Observable<any> {
    return this.http.post(`${this.url}/login`, credenciales).pipe(
      map((data) => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        this._parcero.next(true);

        return data;
      })
    );
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }

  loggedIn() {
    return this.parcero;
  }

  logoutUser() {
    this._parcero.next(false);
    sessionStorage.clear();
    localStorage.clear();

    this.currentUserSubject.next(null);
    alert('Has cerrado sesión');
  }
}
