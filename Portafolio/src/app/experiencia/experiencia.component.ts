import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor(private datos:DatosService) { }
  Experiencia  = this.datos.Experiencia;
  Info = this.datos.Info;
  Imagen = this.datos.Imagen;
  ngOnInit(): void {
  }

}
