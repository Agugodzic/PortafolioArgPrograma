import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  constructor(private datos:DatosService) { }

  Imagen = this.datos.Imagen;

  ngOnInit(): void {
  }
}

