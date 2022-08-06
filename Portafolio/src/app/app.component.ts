import { Component } from '@angular/core';
import { DatosService } from './datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private Datos:DatosService){
  }
  Imagen = this.Datos.Imagen;
  Link = this.Datos.Link;

  mostrarLogIn:boolean = false;

  switchLogIn():void{
    if(this.mostrarLogIn == true){
      this.mostrarLogIn = false;
    }else{
      this.mostrarLogIn = true;
    }
  }
}

