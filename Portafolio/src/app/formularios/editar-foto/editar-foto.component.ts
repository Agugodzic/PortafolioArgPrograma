import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/datos.service';
import { FotoPerfilModel } from 'src/app/models/foto-perfil-model';
import { FotoPerfilService } from 'src/app/servicios/foto-perfil.service';
import { FormBuilder } from '@angular/forms';
import { InfoService } from 'src/app/servicios/info.service';
import { InfoModel } from 'src/app/models/info-model';

@Component({
  selector: 'app-editar-foto',
  templateUrl: './editar-foto.component.html',
  styleUrls: ['./editar-foto.component.css']
})
export class EditarFotoComponent implements OnInit {

  public listaDeFotos:FotoPerfilModel[];
  public agregarFoto:FormGroup;
  public datosDeUsuario:InfoModel;
  public textoAgregar:string = "Agregar";
  public mostrarAgregar:boolean = false;
  public info:InfoModel;

  constructor(private datos:DatosService, private fotoService:FotoPerfilService , private infoService:InfoService , private formBuilder:FormBuilder) { }

  /*---------------foto-service----------------*/

  public listar(){
    this.fotoService.listar().subscribe({
      next: (response: FotoPerfilModel[])  =>{
        this.listaDeFotos = response;
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

  public cambiarFoto(foto:string){
    this.info = {
      id:this.datosDeUsuario.id,
      perfil:foto,
      portada:this.datosDeUsuario.portada,
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
    this.fotoService.agregar(this.agregarFoto.value).subscribe();
    this.cambiarFoto(this.agregarFoto.value)
    setTimeout(() => location.reload(),3000)
  }

  eliminar(id:number){
    this.fotoService.eliminar(id).subscribe();
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

  fotoClick(foto:string):void{
    this.cambiarFoto(foto);
    location.reload();
  }

  ngOnInit(): void {
    this.listar();
    this.obtenerInfo();
    this.agregarFoto = this.formBuilder.group({
      link:["",[Validators.required]]
    })
  }

}
