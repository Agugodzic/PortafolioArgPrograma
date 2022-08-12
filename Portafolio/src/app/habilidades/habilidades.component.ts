import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  constructor(private datos:DatosService) { }

  Habilidades = this.datos.Habilidades;
  Imagen = this.datos.Imagen;
  mostrarEditarHabilidades = false;

  switchHabilidades():void{
    if(this.mostrarEditarHabilidades == true){
      this.mostrarEditarHabilidades = false;
    }else{
      this.mostrarEditarHabilidades = true;
    }
  }

  ngOnInit(): void {
  }

}
