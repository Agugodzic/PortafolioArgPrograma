import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatosService } from 'src/app/datos.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {

  @Input() id:any;
  @Input() accion:any;

  proyecto:any;

  constructor(private datos:DatosService) { }

  editar():boolean{
    return this.accion == "editar";
  }
  agregar():boolean{
    return this.accion == "agregar";
  }
  editarProyecto = new FormGroup(
    {}
  )
  agregarProyecto = new FormGroup(
    {}
  )

  ngOnInit(): void {
    this.proyecto = this.datos.Proyectos.find((elemento:any) => elemento.id == this.id);
  }

}
