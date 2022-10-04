import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { ProyectosModel } from '../models/proyectos-model';
import { ProyectosService } from '../servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public Proyectos:ProyectosModel[];
  public Imagen = this.datos.Imagen;
  public proyecto:any;
  public accion:string="";
  public mostrarEditarProyecto:boolean = false;

  constructor(private datos:DatosService, private proyectoService:ProyectosService) { }

  private listarProyectos(){
    this.proyectoService.listar().subscribe({
      next: (response: ProyectosModel[])  =>{
        this.Proyectos  = response;
      },
        error:(error:HttpErrorResponse) =>{
          alert(error.message)
        }
    })
  }

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
    this.listarProyectos();
  }
}
