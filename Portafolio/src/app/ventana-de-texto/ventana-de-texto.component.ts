import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventana-de-texto',
  templateUrl: './ventana-de-texto.component.html',
  styleUrls: ['./ventana-de-texto.component.css']
})
export class VentanaDeTextoComponent implements OnInit {
  @Input() titulo:string;
  @Input() texto:string;

  constructor() { }

  ngOnInit(): void {
  }

}
