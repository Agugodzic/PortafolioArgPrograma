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
}

