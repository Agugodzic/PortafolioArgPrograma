import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit ,Input } from '@angular/core';
import { DatosService } from '../datos.service';
import { InfoModel } from '../models/info-model';
import { InfoService } from '../servicios/info.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  public datosDeUsuario:InfoModel;
  public Imagen:any = this.datos.Imagen;
  public Info:any = this.datos.Info;
  public verMasTexto:String = "Ver mas";
  public verMas:boolean = false;
  public mostrarEditarPortada = false;
  public mostrarEditarInfo = false;
  public mostrarEditarFoto = false;

  @Input() logeado:boolean;

  constructor(private datos:DatosService , private infoService:InfoService ) {
  }

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
  switchInfo():void{
    if(this.mostrarEditarInfo == true){
      this.mostrarEditarInfo = false;
    }else{
      this.mostrarEditarInfo = true;
    }
  }
  switchFoto():void{
    if(this.mostrarEditarFoto == true){
      this.mostrarEditarFoto = false;
    }else{
      this.mostrarEditarFoto = true;
    }
  }

  public listarInfo(){
    this.infoService.listar().subscribe({
      next: (response: InfoModel[])  =>{
        this.datosDeUsuario  = response[0];
      },
        error:(error:HttpErrorResponse) =>{
          console.log(error.message)
        }
    })
  }

  ngOnInit(): void {
    this.listarInfo();
  }
}
