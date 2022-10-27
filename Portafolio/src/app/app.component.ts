import { Component, OnInit } from '@angular/core';
import { DatosService } from './datos.service';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public Imagen = this.Datos.Imagen;
  public Link = this.Datos.Link;
  public mostrarLogIn:boolean = false;
  public log:any;

  constructor(private Datos:DatosService,public authService:AuthService){
  }

  logValued = () => this.authService.loggedIn();

  logOut(){
    this.authService.logoutUser();
    this.logValued()
    location.reload()
  }

  switchLogIn():void{
    if(this.mostrarLogIn == true){
      this.mostrarLogIn = false;
    }else{
      this.mostrarLogIn = true;
    }
  }

  ngOnInit(): void {
    this.log = this.authService.loggedIn();
  }

}
