import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { CursoModel } from '../models/curso-model';
import { CursosService } from '../servicios/cursos.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  public Imagen:any;
  public Cursos:any;
  public TituloSecundario:any;
  public UniversitarioIncompleto:any;
  public TituloUniversitario:any;
  public Terciario:any;
  public mostrarEditarEstudios:boolean = false;

  private _objeto:string;
  private _id:number;
  private _accion:string;

  public editarCurso : CursoModel | undefined;
  public listaDeCursos: CursoModel[] | undefined;

  constructor(private datos:DatosService, private cursos:CursosService) {
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

  //--------------Cursos----------------//

  public listarCursos(){
    this.cursos.listarCursos().subscribe({
      next: (response: CursoModel[])  =>{
        this.listaDeCursos = response;
      },
        error:(error:HttpErrorResponse) =>{
          alert(error.message)
        }
    })
  }

  public eliminarCurso(id:number){
    this.cursos.eliminarCurso(id).subscribe();
    location.reload();
  }

  //--------------Terciario----------------//

  public listarCursosd(){
    this.cursos.listarCursos().subscribe({
      next: (response: CursoModel[])  =>{
        this.listaDeCursos = response;
      },
        error:(error:HttpErrorResponse) =>{
          alert(error.message)
        }
      })
  }

  public eliminarCursdo(id:number){
    this.cursos.eliminarCurso(id).subscribe();
    location.reload();
  }

  //--------------Universitario----------------//

  public listarCurddsos(){
    this.cursos.listarCursos().subscribe({
      next: (response: CursoModel[])  =>{
        this.listaDeCursos = response;
      },
        error:(error:HttpErrorResponse) =>{
          alert(error.message)
        }
    })
  }

  //------------------------------------------//

  public eliminarCurddso(id:number){
    this.cursos.eliminarCurso(id).subscribe();
    location.reload();
  }

  //-----------------------------------//

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
    this.listarCursos()
  }
}

