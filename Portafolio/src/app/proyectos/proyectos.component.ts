import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private datos:DatosService) { }

  id:number=0;
  accion:string="";
  mostrarEditarProyecto:boolean = false;

  switchProyecto(accion:string,id:number):void{
    this.id = id;
    this.accion = accion;

    if(this.mostrarEditarProyecto == true){
      this.mostrarEditarProyecto = false;
    }else{
      this.mostrarEditarProyecto = true;
    }
  }

  Experiencia = this.datos.Experiencia;
  Proyectos = this.datos.Proyectos;
  Imagen = this.datos.Imagen;

  ngOnInit(): void {
  }
}
