import { ThisReceiver } from '@angular/compiler';
import { Component, Input  } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent{
  Experiencia:any;
  Info:any;
  Imagen:any;

  constructor(private datos:DatosService) {
    this.Experiencia  = this.datos.Experiencia;
    this.Info = this.datos.Info;
    this.Imagen = this.datos.Imagen;
  }

  editarExperiencia:boolean=false;

  switchEditarExperiencia():void{

  }
}
