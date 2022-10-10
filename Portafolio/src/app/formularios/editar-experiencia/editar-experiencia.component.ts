import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaModel } from 'src/app/models/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit{
  @Input() id:any;
  @Input() accion:any;
  @Input() experiencia:any;

  public editarExperiencia:FormGroup;
  public agregarExperiencia:FormGroup;
  public listaDeExperiencias:ExperienciaModel[] ;
  public Experiencia:ExperienciaModel;

  constructor(private formBuilder:FormBuilder, private experienciaService:ExperienciaService) {
  }

  editar():boolean{
    return this.accion == "editar";
  }
  agregar():boolean{
    return this.accion == "agregar";
  }

  submitEditar():any{
    this.experienciaService.editar(this.editarExperiencia.value).subscribe();
    location.reload();
  }
  submitAgregar():any{
    this.experienciaService.agregar(this.agregarExperiencia.value).subscribe();
    location.reload();
  }

  public listarExperiencias(){
    this.experienciaService.listar().subscribe({
      next: (response: ExperienciaModel[])  =>{
        this.listaDeExperiencias = response;
      },
        error:(error:HttpErrorResponse) =>{
          alert(error.message)
        }
    })
  };

  ngOnInit(): void {
    this.listarExperiencias();
    this.Experiencia = this.experiencia;
    this.editarExperiencia = this.formBuilder.group(
      {
        id:[],
        puesto:['',[Validators.required]],
        empresa:['',[Validators.required]],
        tiempo:['',[Validators.required]],
        unidad:['',[Validators.required]],
      }
    )
    this.agregarExperiencia = this.formBuilder.group(
      {
        puesto:['',[Validators.required]],
        empresa:['',[Validators.required]],
        tiempo:['',[Validators.required]],
        unidad:['',[Validators.required]],
      }
    )

    this.editarExperiencia.patchValue({
      id:this.experiencia.id,
      puesto:this.experiencia.puesto,
      empresa:this.experiencia.empresa,
      tiempo:this.experiencia.tiempo,
      unidad:this.experiencia.unidad,
    })
  }
  }
