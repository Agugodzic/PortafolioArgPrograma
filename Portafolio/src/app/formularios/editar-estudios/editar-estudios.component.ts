import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatosService } from 'src/app/datos.service';

@Component({
  selector: 'app-editar-estudios',
  templateUrl: './editar-estudios.component.html',
  styleUrls: ['./editar-estudios.component.css']
})
export class EditarEstudiosComponent implements OnInit {
  private Cursos:any;
  private Terciario:any;
  private Universitario:any;
  private UniversitarioEnCurso:any;
  private _Objeto:any;
  private _objetoTitulo:any;

  @Input() private id:any;
  @Input() private _accion:any;
  @Input() private objeto:string;

  constructor(private datos:DatosService) {
    this.objeto="";
    this.Cursos = this.datos.Cursos;
    this.Terciario = this.datos.Terciario;
    this.Universitario = this.datos.TituloUniversitario;
    this.UniversitarioEnCurso = this.datos.UniversitarioIncompleto;
  }

  public get accion():string{
    return this._accion;
  }

  public get Objeto():any{
    return this._Objeto;
  }

  public get objetoTitulo():String{
    return this._objetoTitulo;
  }

  info = new FormGroup(
    {}
  )

  vincularObjeto(objeto:any){
    switch(objeto){
      case "Cursos":
        this._Objeto = this.Cursos.find((elemento:any) => elemento.id == this.id);
        this._objetoTitulo = "curso";
        break;

      case "Universitario":
        this._Objeto = this.Universitario.find((elemento:any) => elemento.id == this.id);
        this._objetoTitulo = "titulo";
        break;

      case "Terciario":
        this._Objeto = this.Terciario.find((elemento:any) => elemento.id == this.id);
        this._objetoTitulo = "terciario";
        break;

      case "UniversitarioEnCurso":
        this._Objeto = this.UniversitarioEnCurso.find((elemento:any) => elemento.id == this.id);
        this._objetoTitulo = "";
        break;
    }
  }

  ngOnInit(): void {
    this.vincularObjeto(this.objeto)
  }

}
