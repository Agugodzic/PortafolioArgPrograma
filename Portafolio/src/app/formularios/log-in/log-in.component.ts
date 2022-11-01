import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { DatosService } from 'src/app/datos.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public Imagen:any = this.datos.Imagen;
  public registrado:boolean = true;
  public logIn:FormGroup;


  constructor(private datos:DatosService, private authService:AuthService, private formBuilder:FormBuilder) { }

  comprobar(){
    if(this.authService.loggedIn()){
      location.reload();
    }else{
      alert("El email o la contraseña son incorrectos.")
    }
  }

  ingresar(){
    this.authService.IniciarSesion(this.logIn.value).subscribe()
    setTimeout(() => this.comprobar(),3000)
  }

  ngOnInit(): void {

    this.logIn = this.formBuilder.group(
      {
        email:['',[Validators.required]],
        password:['',[Validators.required]]
      }
    )

  }

}
