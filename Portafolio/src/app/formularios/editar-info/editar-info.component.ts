import { Component, OnInit, EventEmitter} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatosService } from 'src/app/datos.service';

@Component({
  selector: 'app-editar-info',
  templateUrl: './editar-info.component.html',
  styleUrls: ['./editar-info.component.css']
})
export class EditarInfoComponent implements OnInit {
  constructor(private datos:DatosService) { }

  Info = this.datos.Info;
  info = new FormGroup(
    {}
  )
  propagar = new EventEmitter<string>();
  cargarFormulario=true;

  ngOnInit(): void {
  }

}
