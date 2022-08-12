import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';
import { DatosService } from 'src/app/datos.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {

  constructor(private datos:DatosService) { }

  Habilidades = this.datos.Habilidades;
  Info = this.datos.Info;
  info = new FormGroup(
    {}
  )

  apellido="godzic";
  cargarFormulario=true;
  ngOnInit(): void {
  }

}
