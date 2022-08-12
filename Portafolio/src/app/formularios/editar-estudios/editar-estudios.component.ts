import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatosService } from 'src/app/datos.service';

@Component({
  selector: 'app-editar-estudios',
  templateUrl: './editar-estudios.component.html',
  styleUrls: ['./editar-estudios.component.css']
})
export class EditarEstudiosComponent implements OnInit {

  constructor(private datos:DatosService) { }

  Info = this.datos.Info;
  info = new FormGroup(
    {}
  )


  ngOnInit(): void {
  }

}
