import { HttpErrorResponse } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { DatosService } from 'src/app/datos.service';
import { PortadaModel } from 'src/app/models/portada-model';
import { PortadaService } from 'src/app/servicios/portada.service';

@Component({
  selector: 'app-editar-portada',
  templateUrl: './editar-portada.component.html',
  styleUrls: ['./editar-portada.component.css']
})

export class EditarPortadaComponent implements OnInit {
  public listaDePortadas:PortadaModel[];
  public portada:PortadaModel;
  public banner:string = this.datos.Imagen.banner3;

  constructor(private datos:DatosService, private portadaService:PortadaService) {}

  public listarPortadas(){
    this.portadaService.listar().subscribe({
      next: (response: PortadaModel[])  =>{
        this.listaDePortadas = response;
      },
        error:(error:HttpErrorResponse) =>{
          alert(error.message)
        }
    })
  }

  bannerClick(banner:string):void{
    this.banner=banner;
  }

  ngOnInit(): void {
    this.listarPortadas();
  }

}
