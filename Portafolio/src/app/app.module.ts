import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './formularios/log-in/log-in.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditarExperienciaComponent } from './formularios/editar-experiencia/editar-experiencia.component';

import { ReactiveFormsModule } from '@angular/forms';
import { EditarHabilidadComponent } from './formularios/editar-habilidad/editar-habilidad.component';
import { EditarPortadaComponent } from './formularios/editar-portada/editar-portada.component';
import { EditarInfoComponent } from './formularios/editar-info/editar-info.component';
import { EditarFotoComponent } from './formularios/editar-foto/editar-foto.component';
import { EditarEstudiosComponent } from './formularios/editar-estudios/editar-estudios.component';
import { EditarProyectosComponent } from './formularios/editar-proyectos/editar-proyectos.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './servicios/interceptor.service';
import { AuthService } from './servicios/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AcercaDeComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    EstudiosComponent,
    ProyectosComponent,
    EditarExperienciaComponent,
    EditarPortadaComponent,
    EditarHabilidadComponent,
    EditarInfoComponent,
    EditarFotoComponent,
    EditarEstudiosComponent,
    EditarProyectosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      "radius": 50,
      "space": -10,
      "unitsColor": "#808080",
      "outerStrokeGradient": true,
      "outerStrokeWidth": 8,
      "outerStrokeColor": "#6ba1db",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "##ffffff12",
      "innerStrokeWidth": 5,
      "title": "UI",
      "titleColor": "#cfcfcf",
      "titleFontSize": "13",
      "titleFontWeight": "20",
      "subtitleColor": "#d1d1d1",
      "subtitleFontSize": "12",
      "animateTitle": true,
      "animationDuration": 800,
      "showUnits": false,
      "showBackground": false,
      "startFromZero": false,
      "lazy": true
        }),
      ReactiveFormsModule
  ],
  providers: [AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
