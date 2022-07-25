import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

  Imagen = {
    logIn:"https://i.postimg.cc/N0YyV1d9/log-in.png",
    argPrograma:"https://i.postimg.cc/B6Jvb4cB/arg-programa2.png",
    facebook:"https://i.postimg.cc/xC5869TW/facebook.png",
    instagram:"https://i.postimg.cc/zDd3WDQh/instagram.png",
    gitHub:"https://i.postimg.cc/DwRxzTFk/github.png",
    linkedin:"https://i.postimg.cc/K8jWzfML/linkedin.png",
    perfil:"https://i.postimg.cc/Yq1STwMq/imagenCV.png",
    banner:"https://i.postimg.cc/vB4rzrQX/banner2.png",
    lapiz:"https://i.postimg.cc/FRctCFsY/ic-edit-128-28238.png",
    lapizNegro:"https://i.postimg.cc/Ss6YBNCn/edit-icon-icons-com-50403.png"
  }

  Link = {
    argPrograma:"https://www.argentina.gob.ar/produccion/transformacion-digital-y-economia-del-conocimiento/argentina-programa",
    facebook:"https://www.facebook.com/agugodzic/",
    instagram:"https://www.instagram.com/agugodzic/",
    gitHub:"https://github.com/Agugodzic",
    linkedin:"https://www.linkedin.com/in/agust%C3%ADn-godzic-109b09188/"
  }

  Info = {
    edad:25,
    nombre:"Agustín",
    apellido:"Godzic",
    titulo:"Full Stack Developer Jr",
    sobreMi:"Soy Agustin, tengo 25 años y soy un estudiante apasionado por la lógica, las matemáticas y la programación. Me encuentro en constante desarrollo y capacitación tanto de forma académica como autodidacta."
  }

}
