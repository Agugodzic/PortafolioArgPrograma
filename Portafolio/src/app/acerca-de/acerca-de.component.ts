import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor(private datos:DatosService) { }
  Imagen = this.datos.Imagen;
  Info = this.datos.Info;
  ngOnInit(): void {
  }

}
