import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/datos.service';

@Component({
  selector: 'app-editar-foto',
  templateUrl: './editar-foto.component.html',
  styleUrls: ['./editar-foto.component.css']
})
export class EditarFotoComponent implements OnInit {

  constructor(private datos:DatosService) { }

  Foto:any = this.datos.Foto;
  foto:string = this.Foto.banner3;
  textoAgregar:string = "Agregar"

  mostrarAgregar:boolean = false;

  agregarSwitch():void{
    if( this.mostrarAgregar == false ){
      this.mostrarAgregar = true;
      this.textoAgregar= "Listo"
    }else{
      this.mostrarAgregar = false;
      this.textoAgregar= "Agregar"
    };
  }

  fotoClick(foto:string):void{
    this.foto=foto;
  }

  ngOnInit(): void {
  }

}
