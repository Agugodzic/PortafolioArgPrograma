import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  Imagen:any;
  Cursos:any;
  TituloSecundario:any;
  UniversitarioIncompleto:any;
  TituloUniversitario:any;
  Terciario:any;
  private _objeto:string;
  private _id:number;
  private _accion:string;

  constructor(private datos:DatosService) {
    this._objeto = "";
    this._id = 0;
    this._accion = "";
    this.Imagen = this.datos.Imagen;
    this.Cursos = this.datos.Cursos;
    this.TituloSecundario = this.datos.TituloSecundario;
    this.UniversitarioIncompleto = this.datos.UniversitarioIncompleto;
    this.TituloUniversitario = this.datos.TituloUniversitario;
    this.Terciario = this.datos.Terciario;
  }

  public get objeto():string{
    return this._objeto
  }
  public get id():number{
    return this._id
  }
  public get accion():string{
    return this._accion;
  }


  mostrarEditarEstudios:boolean = false;

  switchEstudios(objeto:string,id:number,accion:string):void{
    this._accion = accion;
    this._id = id;
    this._objeto = objeto;
    if(this.mostrarEditarEstudios == true){
      this.mostrarEditarEstudios = false;
    }else{
      this.mostrarEditarEstudios = true;
    }
  }

  ngOnInit(): void {
  }
}

