import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  public editarEstudio:FormGroup;
  public agregarEstudio:FormGroup;
  public objetoTitulo:string;
  private servicio:any;

  constructor(
    private cursosService:CursosService,
    private terciarioService:TerciarioService,
    private universitarioService:UniversitarioService,
    private secundarioService:SecundarioService,
    private universitarioEnCursoService:UniversitarioEnCursoService,
    private formBuilder:FormBuilder
    ){
  }

  submitEditar():any{
    this.servicio.editar(this.editarEstudio.value).subscribe();
    setTimeout(() => location.reload(),2000)
  }
  submitAgregar():any{
    this.servicio.agregar(this.agregarEstudio.value).subscribe();
    setTimeout(() => location.reload(),2000)
  }


  vincularObjeto(tipo:any,elemento:any){

    switch(tipo){
      case "Cursos":
        this.objetoTitulo = "curso";
        this.servicio = this.cursosService;
        break;

      case "Universitario":
        this.objetoTitulo = "titulo";
        this.servicio = this.universitarioService;
        break;

      case "UniversitarioEnCurso":
        this.objetoTitulo = "titulo";
        this.servicio = this.universitarioEnCursoService;
        break;

      case "Terciario":
        this.objetoTitulo = "titulo";
        this.servicio = this.terciarioService;
        break;

      case "UniversitarioEnCurso":
        this.objetoTitulo = "";
        this.servicio = this.universitarioService;
        break;
    }
  }
  public listar(){
    this.cursosService.listar().subscribe({
      next: (response: CursoModel[])  =>{
      },
        error:(error:HttpErrorResponse) =>{
          alert(error.message)
        }
    })
  };
  ngOnInit(): void {
    this.listar()
    this.vincularObjeto(this.tipo,this.elemento);
    this.editarEstudio = this.formBuilder.group(
      {
        id:[],
        titulo:['',[Validators.required]],
        institucion:['',[Validators.required]],
        descripcion:['',[Validators.required]]
      }
    )
    this.agregarEstudio = this.formBuilder.group(
      {
        titulo:['',[Validators.required]],
        institucion:['',[Validators.required]],
        descripcion:['',[Validators.required]]
      }
    )

    this.editarEstudio.patchValue({
      id:this.elemento.id,
      titulo:this.elemento.titulo,
      institucion:this.elemento.institucion,
      descripcion:this.elemento.descripcion
    })
  }
}
