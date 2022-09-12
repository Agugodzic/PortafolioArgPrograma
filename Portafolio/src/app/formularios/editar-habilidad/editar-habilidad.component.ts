import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  constructor(private datos:DatosService, private habilidadesService:HabilidadesService) {}

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

  editarHabilidad = new FormGroup({});
  agregarHabilidad = new FormGroup({});

  ngOnInit(): void {
    this.listarHabilidades()
    this.Habilidad = this.habilidad

  }
}
