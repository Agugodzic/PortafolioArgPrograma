import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  constructor(private datos:DatosService) { }

  Imagen = this.datos.Imagen;
  mostrarEditarEstudios:boolean = false;

  switchEstudios():void{
    if(this.mostrarEditarEstudios == true){
      this.mostrarEditarEstudios = false;
    }else{
      this.mostrarEditarEstudios = true;
    }
  }

  ngOnInit(): void {
  }
}

