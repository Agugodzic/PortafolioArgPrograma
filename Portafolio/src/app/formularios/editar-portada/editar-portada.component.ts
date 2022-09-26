import { HttpErrorResponse } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public textoAgregar:string = "Agregar"
  public mostrarAgregar:boolean = false;
  public agregarPortada:FormGroup;

  constructor(private datos:DatosService, private portadaService:PortadaService, private formBuilder:FormBuilder) {}

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

  submitAgregar():any{
    this.portadaService.agregar(this.agregarPortada.value).subscribe();
    location.reload()
  }

  eliminar(id:number){
    this.portadaService.eliminar(id).subscribe();
    location.reload()
  }

  agregarSwitch():void{
    if( this.mostrarAgregar == false ){
      this.mostrarAgregar = true;
      this.textoAgregar= "Listo"
    }else{
      this.mostrarAgregar = false;
      this.textoAgregar= "Agregar"
    };
  }

  bannerClick(banner:string):void{
    this.banner=banner;
  }

  ngOnInit(): void {
    this.listarPortadas();
    this.agregarPortada = this.formBuilder.group({
      link:["",[Validators.required]]
    })
  }

}
