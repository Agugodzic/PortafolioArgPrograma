import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/datos.service';
import { FotoPerfilModel } from 'src/app/models/foto-perfil-model';
import { FotoPerfilService } from 'src/app/servicios/foto-perfil.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar-foto',
  templateUrl: './editar-foto.component.html',
  styleUrls: ['./editar-foto.component.css']
})
export class EditarFotoComponent implements OnInit {

  public listaDeFotos:FotoPerfilModel[];
  public agregarFoto:FormGroup;
  public Foto:any = this.datos.Foto;
  public foto:string = this.Foto.banner3;
  public textoAgregar:string = "Agregar"
  public mostrarAgregar:boolean = false;

  constructor(private datos:DatosService, private fotoService:FotoPerfilService , private formBuilder:FormBuilder) { }

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

  submitAgregar():any{
    this.fotoService.agregar(this.agregarFoto.value).subscribe();
    location.reload()
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
    this.foto=foto;
  }

  ngOnInit(): void {
    this.listar()
    this.agregarFoto = this.formBuilder.group({
      link:["",[Validators.required]]
    })
  }

}
