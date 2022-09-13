import { Component, OnInit,Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatosService } from 'src/app/datos.service';
import { ExperienciaModel } from 'src/app/models/experiencia.model';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit{
  @Input() id:any;
  @Input() accion:any;
  @Input() experiencia:any;

  nuevaExperiencia: ExperienciaModel = new ExperienciaModel()

  constructor(private datos:DatosService ) {
  }

  editar():boolean{
    return this.accion == "editar";
  }
  agregar():boolean{
    return this.accion == "agregar";
  }

  editarExperiencia = new FormGroup(
    {}
  )
  agregarExperiencia = new FormGroup(
    {}
  )

  onSubmit():void{
  }

  ngOnInit(): void {
  }

  }
