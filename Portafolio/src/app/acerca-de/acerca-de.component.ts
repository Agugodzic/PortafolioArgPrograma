import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor(private datos:DatosService) { }
  Imagen:any = this.datos.Imagen;
  Info:any = this.datos.Info;
  verMasTexto:String = "Ver mas";
  verMas:boolean = false;

  verMasClick(){
    if(this.verMas == false){
      this.verMasTexto = "Ver menos";
      this.verMas = true;
    }
    else{
      this.verMasTexto = "Ver mas";
      this.verMas = false;
    }
  }
  ngOnInit(): void {
  }

}
