import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit  } from '@angular/core';
import { DatosService } from '../datos.service';
import { ExperienciaModel } from '../models/experiencia.model';
import { ExperienciaService } from '../servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  Experiencia:any;
  experiencia:any;
  Info:any;
  Imagen:any;
  accion:string;
  id:number;
  editarExperiencia:boolean;
  listaDeExperiencias:any= [];

  @Input() logeado:boolean;

  constructor( private datos:DatosService , private experienciaService:ExperienciaService ) {
    this.editarExperiencia = false;
    this.accion="";
    this.id=0;
    this.Info = this.datos.Info;
    this.Imagen = this.datos.Imagen;
  }

    //-----------------------------------//

    public listarExperiencias(){
      this.experienciaService.listar().subscribe({
        next: (response: ExperienciaModel[])  =>{
          this.listaDeExperiencias = response;
        },
          error:(error:HttpErrorResponse) =>{
            console.log(error.message)
          }
      })
    }

    public eliminarExperiencia(id:number){
      this.experienciaService.eliminar(id).subscribe();
      location.reload();
    }

    //-----------------------------------//

  switchExperiencia(accion:string,id:number,experiencia:any):void{
    this.id = id;
    this.accion = accion;
    this.experiencia = experiencia;
    if(this.editarExperiencia == false){
      this.editarExperiencia = true;
    }else{
      this.editarExperiencia = false;
    }
  }

  ngOnInit(): void {
    this.listarExperiencias();
  }
}

