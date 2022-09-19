import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { CursoModel } from '../models/curso-model';
import { SecundarioModel } from '../models/secundario-model';
import { TerciarioModel } from '../models/terciario-model';
import { UniversitarioEnCursoModel } from '../models/universitario-en-curso-model';
import { UniversitarioModel } from '../models/universitario-model';
import { CursosService } from '../servicios/cursos.service';
import { SecundarioService } from '../servicios/secundario.service';
import { TerciarioService } from '../servicios/terciario.service';
import { UniversitarioEnCursoService } from '../servicios/universitario-en-curso.service';
import { UniversitarioService } from '../servicios/universitario.service';

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
  public elemento:any;

  private _objeto:string;
  private _id:number;
  private _accion:string;

  public editarCurso : CursoModel | undefined;
  public listaDeCursos: CursoModel[] | undefined;
  public listaTerciario: TerciarioModel[] | undefined;
  public listaUniversitario: UniversitarioModel[] | undefined;
  public listaUniversitarioEnCurso: UniversitarioEnCursoModel[] | undefined;
  public tituloSecundario: SecundarioModel | undefined;

  constructor(
    private datos:DatosService,
    private cursos:CursosService,
    private secundario:SecundarioService,
    private terciario:TerciarioService,
    private universitario:UniversitarioService,
    private universitarioEnCurso:UniversitarioEnCursoService)
    {
    this._id = 0;
    this.Imagen = this.datos.Imagen;
    this.TituloSecundario = this.datos.TituloSecundario;
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
    this.cursos.listar().subscribe({
      next: (response: CursoModel[])  =>{
        this.listaDeCursos = response;
      },
        error:(error:HttpErrorResponse) => {
          alert(error.message)
        }
    })
  }

  public eliminarCurso(id:number){
    this.cursos.eliminar(id).subscribe();
    location.reload();
  }

  //--------------Terciario----------------//

  public listarTerciario(){
    this.terciario.listar().subscribe({
      next: (response: TerciarioModel[])  =>{
        this.listaTerciario = response;
      },
        error:(error:HttpErrorResponse) =>{
          alert(error.message)
        }
      })
  }

  public eliminarTerciario(id:number){
    this.terciario.eliminar(id).subscribe();
    location.reload();
  }

  //--------------Universitario----------------//

  public listarUniversitario(){
    this.universitario.listar().subscribe({
      next: (response: UniversitarioModel[])  =>{
        this.listaUniversitario = response;
      },
        error:(error:HttpErrorResponse) =>{
          alert(error.message)
        }
    })
  }

  public eliminarUniversitario(id:number){
    this.universitario.eliminar(id).subscribe();
    location.reload();
  }

    //--------------Universitario----------------//

    public listarUniversitarioEnCurso(){
      this.universitarioEnCurso.listar().subscribe({
        next: (response: UniversitarioEnCursoModel[])  =>{
          this.listaUniversitario = response;
        },
          error:(error:HttpErrorResponse) =>{
            alert(error.message)
          }
      })
    }

    public eliminarUniversitarioEnCurso(id:number){
      this.universitarioEnCurso.eliminar(id).subscribe();
      location.reload();
    }


    //--------------Secundario----------------//

    public Secundario(){
      this.secundario.get().subscribe({
        next: (response: SecundarioModel)  =>{
          this.TituloSecundario = response;
        },
          error:(error:HttpErrorResponse) =>{
            alert(error.message)
          }
      })
    }

    //------Funcion-Generar-Formulario--------//

  switchEstudios(objeto:string,id:number,accion:string,elemento:any):void{
    this._accion = accion;
    this._id = id;
    this._objeto = objeto;
    this.elemento = elemento

    if(this.mostrarEditarEstudios == true){
      this.mostrarEditarEstudios = false;
    }else{
      this.mostrarEditarEstudios = true;
    }
  }

  ngOnInit(): void {
    this.listarCursos();
    this.listarUniversitario();
    this.listarTerciario();
    this.listarUniversitarioEnCurso();
  }
}

