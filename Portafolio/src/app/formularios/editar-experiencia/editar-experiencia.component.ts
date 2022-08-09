import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatosService } from 'src/app/datos.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent{
  editar;
  agregar;
  @Input() id:any;
  @Input() accion:any;

  constructor(private datos:DatosService) {
    if(this.accion=="editar"){
      this.editar = true;
      this.agregar = false;
    }else if(this.accion=="agregar"){
      this.editar = false;
      this.agregar = true;
    }
   }

  editarExperiencia = new FormGroup(
    {}
  )
  agregarExperiencia = new FormGroup(
    {}
  )

  }
