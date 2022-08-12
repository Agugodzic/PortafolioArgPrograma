import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatosService } from 'src/app/datos.service';


@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {

  constructor(private datos:DatosService) { }

  Info = this.datos.Info;
  info = new FormGroup(
    {}
  )


  ngOnInit(): void {
  }

}
