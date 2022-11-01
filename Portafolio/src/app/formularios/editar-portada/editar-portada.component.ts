import { HttpErrorResponse } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/datos.service';
import { InfoModel } from 'src/app/models/info-model';
import { PortadaModel } from 'src/app/models/portada-model';
import { InfoService } from 'src/app/servicios/info.service';
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
  public textoAgregar:string = "Agregar";
  public mostrarAgregar:boolean = false;
  public agregarPortada:FormGroup;
  public datosDeUsuario:InfoModel;
  public info:InfoModel;

  constructor(private datos:DatosService, private portadaService:PortadaService, private formBuilder:FormBuilder, private infoService:InfoService) {}

  /*------------portada-service---------------*/

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
  /*---------------info-service----------------*/

  public obtenerInfo(){
    this.infoService.listar().subscribe({
      next: (response: InfoModel[])  =>{
        this.datosDeUsuario = response[0];
      },
        error:(error:HttpErrorResponse) =>{
          alert(error.message)
        }
    })
  }

  public cambiarPortada(portada:string){
    this.info = {
      id:this.datosDeUsuario.id,
      perfil:this.datosDeUsuario.perfil,
      portada:portada,
      sobremi:this.datosDeUsuario.sobremi,
      nombre:this.datosDeUsuario.nombre,
      apellido:this.datosDeUsuario.apellido,
      edad:this.datosDeUsuario.edad,
      pais:this.datosDeUsuario.pais,
      ciudad:this.datosDeUsuario.ciudad,
      codigopostal:this.datosDeUsuario.codigopostal,
      email:this.datosDeUsuario.email,
      titulo:this.datosDeUsuario.titulo,
      otro:this.datosDeUsuario.otro,
      telefono:this.datosDeUsuario.telefono
    }
    this.infoService.editar(this.info).subscribe()
  }

    /*-------------------------------------------*/

  submitAgregar():any{
    this.portadaService.agregar(this.agregarPortada.value).subscribe();
    setTimeout(() => location.reload(),2000)
  }

  eliminar(id:number){
    this.portadaService.eliminar(id).subscribe();
    location.reload()
  }

  agregarSwitch():void{
    if(
      this.mostrarAgregar == false ){
      this.mostrarAgregar = true;
      this.textoAgregar= "Listo"
    }else{
      this.mostrarAgregar = false;
      this.textoAgregar= "Agregar"
    };
  }

  bannerClick(portada:string):void{
    this.cambiarPortada(portada)
    setTimeout(() => location.reload(),2000)

  }

  ngOnInit(): void {
    this.obtenerInfo()
    this.listarPortadas();
    this.agregarPortada = this.formBuilder.group({
      link:["",[Validators.required]]
    })
  }

}
