import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatosService } from 'src/app/datos.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent{
  @Input() id:any;
  @Input() accion:any;
  experiencia:any;

  constructor(private datos:DatosService ) {
    this.experiencia = this.datos.Experiencia.find((elemento:any) => elemento.id == 1);
  }

  editar():boolean{
    return this.accion == "editar";
  }
  agregar():boolean{
    return this.accion =="agregar";
  }

  editarExperiencia = new FormGroup(
    {}
  )
  agregarExperiencia = new FormGroup(
    {}
  )

  }
