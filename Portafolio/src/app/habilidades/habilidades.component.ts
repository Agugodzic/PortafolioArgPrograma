import { Component, Input, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { HabilidadesModel} from '../models/habilidades.model';
import { HabilidadesService } from '../servicios/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {
  public id:number=0;
  public accion:string="";
  public habilidad:HabilidadesModel;
  public listaDeHabilidades?:any;
  public Imagen = this.datos.Imagen;
  public mostrarEditarHabilidad = false;
  public mostrarRecurso:boolean = false;

  constructor(private datos:DatosService, private habilidadesService:HabilidadesService) { }

  @Input() logeado:boolean;
  //-----------------------------------//

  public listarHabilidades(){
    this.habilidadesService.listar().subscribe(
      (response: HabilidadesModel[])  =>{
        this.listaDeHabilidades = response;
    })}

  public eliminarHabilidad(id:number):void{
    this.habilidadesService.eliminar(id).subscribe();
    setTimeout(() => location.reload(),1000)
  }

  public mostrar(){
    this.mostrarRecurso = true;
  }

  //-----------------------------------//

  switchHabilidad(accion:string,id:number,habilidad:any):void{
    this.id = id;
    this.accion = accion;
    this.habilidad = habilidad;
    if(this.mostrarEditarHabilidad == true){
      this.mostrarEditarHabilidad = false;
    }else{
      this.mostrarEditarHabilidad = true;
    }
  }

  ngOnInit(): void {
    this.listarHabilidades()
  }

}
