import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { ProyectosModel } from '../models/proyectos-model';
import { ProyectosService } from '../servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public Proyectos:any = [];
  public Imagen = this.datos.Imagen;
  public proyecto:ProyectosModel;
  public accion:string="";
  public mostrarEditarProyecto:boolean = false;

  @Input() logeado:boolean;

  constructor(private datos:DatosService, private proyectoService:ProyectosService) { }

  private listarProyectos(){
    this.proyectoService.listar().subscribe({
      next: (response: ProyectosModel[])  =>{
        this.Proyectos  = response;
      },
        error:(error:HttpErrorResponse) =>{
          console.log(error.message)
        }
    })
  }

  public eliminarProyecto(id:number):void{
    this.proyectoService.eliminar(id).subscribe();
    location.reload();
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
