import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private datos:DatosService) { }


  Experiencia = this.datos.Experiencia;
  Proyectos = this.datos.Proyectos;

  ngOnInit(): void {
  }
}
