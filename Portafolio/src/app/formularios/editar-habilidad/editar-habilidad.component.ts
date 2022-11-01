import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/datos.service';
import { HabilidadesModel } from 'src/app/models/habilidades.model';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {

  @Input() id:any;
  @Input() accion:any;
  @Input() habilidad:any;

  public Habilidad:any;
  public listaDeHabilidades:HabilidadesModel[] ;
  public editarHabilidad:FormGroup;
  public agregarHabilidad:FormGroup;

  constructor(private formBuilder:FormBuilder, private datos:DatosService, private habilidadesService:HabilidadesService){}

  editar():boolean{
    return this.accion == "editar";
  };
  agregar():boolean{
    return this.accion == "agregar";
  };

  public listarHabilidades(){
    this.habilidadesService.listar().subscribe({
      next: (response: HabilidadesModel[])  =>{
        this.listaDeHabilidades = response;
      },
        error:(error:HttpErrorResponse) =>{
          alert(error.message)
        }
    })
  };

  submitEditar():any{
    this.habilidadesService.editar(this.editarHabilidad.value).subscribe();
    setTimeout(() => location.reload(),1000)
  }
  submitAgregar():any{
    this.habilidadesService.agregar(this.agregarHabilidad.value).subscribe();
    setTimeout(() => location.reload(),1000)
  }


  ngOnInit(): void {
    this.listarHabilidades()
    this.Habilidad = this.habilidad
    this.editarHabilidad = this.formBuilder.group(
      {
        id:[],
        habilidad:['',[Validators.required]],
        nivel:['',[Validators.required,Validators.pattern("[0-9][0-9]")]],
      }
    )
    this.agregarHabilidad = this.formBuilder.group(
      {
        habilidad:['',[Validators.required]],
        nivel:['',[Validators.required,Validators.pattern("[0-9][0-9]")]]
      }
    )

    this.editarHabilidad.patchValue({
      id:this.habilidad.id,
      habilidad:this.habilidad.habilidad,
      nivel:this.habilidad.nivel,
    })

  }
}
