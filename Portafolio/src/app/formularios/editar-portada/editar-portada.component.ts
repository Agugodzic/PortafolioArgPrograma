import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/datos.service';

@Component({
  selector: 'app-editar-portada',
  templateUrl: './editar-portada.component.html',
  styleUrls: ['./editar-portada.component.css']
})
export class EditarPortadaComponent implements OnInit {

  constructor(private datos:DatosService) {
   }

  Banner:any = this.datos.Banner;
  banner:string=this.Banner.banner3;

  bannerClick(banner:string):void{
    this.banner=banner;
  }

  ngOnInit(): void {
  }

}
