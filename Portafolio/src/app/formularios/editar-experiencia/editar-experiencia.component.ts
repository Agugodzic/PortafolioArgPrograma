import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatosService } from 'src/app/datos.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit{
  @Input() id:any;
  @Input() accion:any;

  constructor(private datos:DatosService ) {
  }

  experiencia:any = this.datos.Experiencia.find((elemento:any) => elemento.id == 1);

  mostrarElemento(){
    alert(this.id)
  }

  returnElemento():number{
    return this.id
  }

  editar():boolean{
    return this.accion == "editar";
  }
  agregar():boolean{
    return this.accion == "agregar";
  }

  editarExperiencia = new FormGroup(
    {}
  )
  agregarExperiencia = new FormGroup(
    {}
  )

  ngOnInit(): void {

  }

  }
