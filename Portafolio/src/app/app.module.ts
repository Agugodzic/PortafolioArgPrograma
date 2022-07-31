import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    EstudiosComponent,
    ProyectosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "unitsColor": "#808080",
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#6ba1db",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "##ffffff12",
      "innerStrokeWidth": 10,
      "title": "UI",
      "titleColor": "#cfcfcf",
      "titleFontSize": "17",
      "titleFontWeight": "200",
      "subtitleColor": "#d1d1d1",
      "subtitleFontSize": "18",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "startFromZero": false,
      "lazy": true
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
