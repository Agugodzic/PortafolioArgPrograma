import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
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
  @Input() public tipo:string;
  @Input() public elemento:any;

  public objetoTitulo:string;

  constructor(
    private cursosService:CursosService,
    private terciarioService:TerciarioService,
    private universitarioService:UniversitarioService,
    private secundarioService:SecundarioService,
    private universitarioEnCursoService:UniversitarioEnCursoService
    ){
  }

  info = new FormGroup(
    {}
  )

  vincularObjeto(tipo:any,elemento:any){

    switch(tipo){
      case "Cursos":
        this.objetoTitulo = "curso";
        break;

      case "Universitario":
        this.objetoTitulo = "titulo";
        break;

      case "Terciario":
        this.objetoTitulo = "titulo";
        break;

      case "UniversitarioEnCurso":
        this.objetoTitulo = "";
        break;
    }
  }

  ngOnInit(): void {
    this.vincularObjeto(this.tipo,this.elemento);
  }
}
