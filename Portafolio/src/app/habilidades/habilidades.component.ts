import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { HabilidadesModel} from '../models/habilidades.model';
import { HabilidadesService } from '../servicios/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {
  id:number=0;
  accion:string="";
  listaDeHabilidades:HabilidadesModel[] | undefined;

  constructor(private datos:DatosService, private habilidadesService:HabilidadesService) { }

  Habilidades = this.datos.Habilidades;
  Imagen = this.datos.Imagen;
  mostrarEditarHabilidad = false;

  //-----------------------------------//

  public listarHabilidades(){
    this.habilidadesService.listar().subscribe({
      next: (response: HabilidadesModel[])  =>{
        this.listaDeHabilidades = response;
      },
        error:(error:HttpErrorResponse) =>{
          alert(error.message)
        }
    })
  }

  public eliminarHabilidad(id:number){
    this.habilidadesService.eliminar(id).subscribe();
    location.reload();
  }

  //-----------------------------------//

  switchHabilidad(accion:string,id:number):void{
    this.id = id;
    this.accion = accion;
    if(this.mostrarEditarHabilidad == true){
      this.mostrarEditarHabilidad = false;
    }else{
      this.mostrarEditarHabilidad = true;
    }
  }

  ngOnInit(): void {
    this.listarHabilidades()
  }

}
