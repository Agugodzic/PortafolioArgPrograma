import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  id:number=0;
  accion:string="";
  constructor(private datos:DatosService) { }

  Habilidades = this.datos.Habilidades;
  Imagen = this.datos.Imagen;
  mostrarEditarHabilidad = false;

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
  }

}
