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
  Banner:any = this.datos.Banner;
  verMasTexto:String = "Ver mas";
  verMas:boolean = false;
  mostrarEditarPortada = false;

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

  switchPortada():void{
    if(this.mostrarEditarPortada == true){
      this.mostrarEditarPortada = false;
    }else{
      this.mostrarEditarPortada = true;
    }
  }
  ngOnInit(): void {
  }

}
