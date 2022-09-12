import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CursoModel } from 'src/app/models/curso-model';
import { TerciarioModel } from 'src/app/models/terciario-model';
import { UniversitarioEnCursoModel } from 'src/app/models/universitario-en-curso-model';
import { UniversitarioModel } from 'src/app/models/universitario-model';
import { CursosService } from 'src/app/servicios/cursos.service';
import { SecundarioService } from 'src/app/servicios/secundario.service';
import { TerciarioService } from 'src/app/servicios/terciario.service';
import { UniversitarioEnCursoService } from 'src/app/servicios/universitario-en-curso.service';
import { UniversitarioService } from 'src/app/servicios/universitario.service';

@Component({
  selector: 'app-editar-estudios',
  templateUrl: './editar-estudios.component.html',
  styleUrls: ['./editar-estudios.component.css']
})
export class EditarEstudiosComponent implements OnInit {
  @Input() public id:number;
  @Input() public accion:string;
  @Input() public objeto:string;

  public listaDeCursos:CursoModel[];
  public listaTerciarios:TerciarioModel[];
  public listaUniversitarios:UniversitarioModel[];
  public listaUniversitariosEnCurso:UniversitarioEnCursoModel[];
  public Objeto:any;
  public objetoTitulo:string;

  constructor(
    private cursosService:CursosService,
    private terciarioService:TerciarioService,
    private universitarioService:UniversitarioService,
    private secundarioService:SecundarioService,
    private universitarioEnCursoService:UniversitarioEnCursoService
    ){
  }

  public listarCursos(){
    this.cursosService.listar().subscribe({
      next: (response: CursoModel[])  =>{
        this.listaDeCursos = response;
      },
        error:(error:HttpErrorResponse) => {
          alert(error.message)
        }
    })
  }

  public listarTerciarios(){
    this.terciarioService.listar().subscribe({
      next: (response: TerciarioModel[])  =>{
        this.listaTerciarios = response;
      }
    })
  }

  public listarUniversitarios(){
    this.universitarioService.listar().subscribe({
      next: (response: UniversitarioModel[])  =>{
        this.listaUniversitarios = response;
      }
    })
  }

  public listarUniversitariosEnCurso(){
    this.universitarioEnCursoService.listar().subscribe({
      next: (response: UniversitarioEnCursoModel[])  =>{
        this.listaUniversitariosEnCurso = response;
      }
    })
  }

  info = new FormGroup(
    {}
  )

  vincularObjeto(objeto:any){
    switch(objeto){
      case "Cursos":
        this.listarCursos();
        alert("lista de cursos: "+ this.listaDeCursos)
        this.objetoTitulo = "curso";
        //alert(this.Objeto + "1")
        //this.Objeto = this.listaDeCursos.find((elemento) => elemento["id"] === 1);
        //alert(this.Objeto  + "2")
        break;

      case "Universitario":
        this.listarUniversitarios();
        this.objetoTitulo = "titulo";
        //this.Objeto = this.listaUniversitarios.find((elemento) => elemento.id == this.id);
        break;

      case "Terciario":
        this.listarTerciarios();
        this.objetoTitulo = "titulo";
        //this.Objeto = this.listaTerciarios.find((elemento:any) => elemento.id == this.id);
        break;

      case "UniversitarioEnCurso":
        this.listarUniversitariosEnCurso();
        this.objetoTitulo = "";
        //this.Objeto = this.UniversitarioEnCurso.find((elemento:any) => elemento.id == this.id);
        break;
    }
  }

  ngOnInit(): void {
    this.vincularObjeto(this.objeto);
  }
}
