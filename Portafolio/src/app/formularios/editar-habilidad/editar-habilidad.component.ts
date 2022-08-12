import { Component, OnInit, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';
import { DatosService } from 'src/app/datos.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {

  @Input() id:any;
  @Input() accion:any;

  Habilidad:any;

  mostrarElemento(){
    alert(this.id)
  }

  constructor(private datos:DatosService) {
   }

  editar():boolean{
    return this.accion == "editar";
  }
  agregar():boolean{
    return this.accion == "agregar";
  }


  editarHabilidad = new FormGroup(
    {}
  )
  agregarHabilidad = new FormGroup(
    {}
  )

  info = new FormGroup(
    {}
  )

  ngOnInit(): void {
    this.Habilidad = this.datos.Habilidades.find((elemento:any) => elemento.id == this.id);
  }

}
