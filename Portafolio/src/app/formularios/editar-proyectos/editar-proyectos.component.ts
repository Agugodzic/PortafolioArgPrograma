import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatosService } from 'src/app/datos.service';
import { ProyectosModel } from 'src/app/models/proyectos-model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {

  @Input() accion:any;
  @Input() proyecto:any;

  public editarProyecto:FormGroup;
  public agregarProyecto:FormGroup;


  constructor(private datos:DatosService,private proyectoService:ProyectosService, private formBuilder:FormBuilder) { }

  private listarProyectos(){
    this.proyectoService.listar().subscribe({
      next: (response: ProyectosModel[])  =>{
        this.proyecto  = response[0];
      },
        error:(error:HttpErrorResponse) =>{
          alert(error.message)
        }
    })
  }

  public submitEditar():any{
    this.proyectoService.editar(this.editarProyecto.value).subscribe();
    location.reload();
  }

  public submitAgregar():any{
    this.proyectoService.agregar(this.agregarProyecto.value).subscribe();
    location.reload();
  }

  public editar():boolean{
    return this.accion == "editar";
  }

  public agregar():boolean{
    return this.accion == "agregar";
  }


  ngOnInit(): void {
    this.editarProyecto = this.formBuilder.group(
      {
        id:["",[]],
        titulo:["",[]],
        terminado:["",[]],
        linkImagen:["",[]],
        linkRepository:["",[]],
        descripcion:["",[]],
      }
    )

    this.agregarProyecto = this.formBuilder.group(
      {
        titulo:["",[]],
        terminado:["",[]],
        linkImagen:["",[]],
        linkRepository:["",[]],
        descripcion:["",[]],
      }
    )

    this.editarProyecto.patchValue({
      id:this.proyecto.id,
      titulo:this.proyecto.titulo,
      terminado:this.proyecto.terminado,
      linkImagen:this.proyecto.linkImagen,
      linkRepository:this.proyecto.linkRepository,
      descripcion:this.proyecto.descripcion
    })
  }

}
