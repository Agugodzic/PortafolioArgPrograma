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

  submitEditar():any{
    this.proyectoService.editar(this.editarProyecto.value).subscribe();
    location.reload();
  }

  submitAgregar():any{
    this.proyectoService.editar(this.agregarProyecto.value).subscribe();
    location.reload();
  }

  editar():boolean{
    return this.accion == "editar";
  }
  agregar():boolean{
    return this.accion == "agregar";
  }


  ngOnInit(): void {
    this.editarProyecto = this.formBuilder.group(
      {
        id:["",[]],
        titulo:["",[]],
        estado:["",[]],
        imagen:["",[]],
        repositorio:["",[]],
        descripcion:["",[]],
      }
    )

    this.agregarProyecto = this.formBuilder.group(
      {
        titulo:["",[]],
        estado:["",[]],
        imagen:["",[]],
        repositorio:["",[]],
        descripcion:["",[]],
      }
    )

    this.editarProyecto.patchValue({
      titulo:this.proyecto.titulo,
      estado:this.proyecto.estado,
      imagen:this.proyecto.linkImagen,
      repositorio:this.proyecto.linkGitHub,
      descripcion:this.proyecto.descripcion
    })
  }

}
