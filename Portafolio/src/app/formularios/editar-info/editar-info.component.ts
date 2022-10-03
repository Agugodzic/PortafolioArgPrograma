import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InfoModel } from 'src/app/models/info-model';
import { InfoService } from 'src/app/servicios/info.service';

@Component({
  selector: 'app-editar-info',
  templateUrl: './editar-info.component.html',
  styleUrls: ['./editar-info.component.css']
})
export class EditarInfoComponent implements OnInit {
  @Input() datos:InfoModel;

  public datosDeUsuario:any;
  public editarInfo:FormGroup;

  constructor(private infoService:InfoService ,private formBuilder:FormBuilder) {
  }

  public listarInfo(){
    this.infoService.listar().subscribe({
      next: (response: InfoModel[])  =>{
        this.datosDeUsuario  = response[0];
      },
        error:(error:HttpErrorResponse) =>{
          alert(error.message)
        }
    })
  }

  submit():any{
    this.infoService.editar(this.editarInfo.value).subscribe();
    location.reload();
  }

  ngOnInit(): void {
    this.listarInfo();
    this.editarInfo = this.formBuilder.group(
      {
        id:[],
        perfil:[],
        portada:[],
        nombre:['',[Validators.required]],
        apellido:['',Validators.required],
        edad:['',Validators.required],
        pais:['',Validators.required],
        telefono:['',Validators.required],
        ciudad:['',Validators.required],
        email:['',Validators.required],
        codigoPostal:['',Validators.required],
        titulo:['',Validators.required],
        otro:['',Validators.required],
        sobreMi:['',Validators.required]
      }
    )
    this.editarInfo.patchValue({
      id:this.datos.id,
      perfil:this.datos.perfil,
      portada:this.datos.portada,
      sobremi:this.datos.sobremi,
      nombre:this.datos.nombre,
      apellido:this.datos.apellido,
      edad:this.datos.edad,
      pais:this.datos.pais,
      ciudad:this.datos.ciudad,
      codigopostal:this.datos.codigopostal,
      email:this.datos.email,
      telefono:this.datos.telefono,
      titulo:this.datos.titulo,
      otro:this.datos.otro,
    })
  }

}
