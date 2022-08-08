import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatosService } from 'src/app/datos.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private datos:DatosService) { }
  Imagen:any = this.datos.Imagen;
  registrado:boolean = true;

  logIn = new FormGroup(
    {}
  )
  crearUsuario = new FormGroup(
    {}
  )

  crearUsuarioClick(){
    this.registrado = false;
  }
  ingresarClick(){
    this.registrado = true;
  }

  ngOnInit(): void {
  }

}
