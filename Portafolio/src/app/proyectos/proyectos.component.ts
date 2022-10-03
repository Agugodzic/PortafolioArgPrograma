import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { ProyectosModel } from '../models/proyectos-model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public Experiencia = this.datos.Experiencia;
  public Proyectos = this.datos.Proyectos;
  public Imagen = this.datos.Imagen;
  public proyecto:any;
  public accion:string="";
  public mostrarEditarProyecto:boolean = false;

  constructor(private datos:DatosService) { }

  switchProyecto(accion:string,proyecto:any):void{
    this.proyecto = proyecto;
    this.accion = accion;

    if(this.mostrarEditarProyecto == true){
      this.mostrarEditarProyecto = false;
    }else{
      this.mostrarEditarProyecto = true;
    }
  }

  ngOnInit(): void {
  }
}
