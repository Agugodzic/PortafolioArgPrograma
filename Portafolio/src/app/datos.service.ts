import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DatosService {

  constructor() { }

  apiUrl = "http://portafoliobackend-production-0719.up.railway.app"

  Imagen = {
    logIn:"https://i.postimg.cc/N0YyV1d9/log-in.png",
    logOut:"https://i.postimg.cc/qRHSh6rv/logOut.png",
    argPrograma:"https://i.postimg.cc/B6Jvb4cB/arg-programa2.png",
    facebook:"https://i.postimg.cc/xC5869TW/facebook.png",
    instagram:"https://i.postimg.cc/zDd3WDQh/instagram.png",
    gitHub:"https://i.postimg.cc/DwRxzTFk/github.png",
    linkedin:"https://i.postimg.cc/K8jWzfML/linkedin.png",
    perfil:"https://i.postimg.cc/Yq1STwMq/imagenCV.png",
    banner:"https://i.postimg.cc/vB4rzrQX/banner2.png",
    banner2:"https://i.pinimg.com/originals/0f/81/ac/0f81ac43b11ce36b81d803077f7584b0.jpg",
    banner3:"https://i.postimg.cc/VNjZ5sfP/banner3.png",
    banner4:"https://i.postimg.cc/bw5KTbST/close-up-image-of-programer-working-at-his-desk-in-office.png",
    banner5:"https://i.postimg.cc/C5Hgr1pK/banner4.jpg",
    lapiz:"https://i.postimg.cc/FRctCFsY/ic-edit-128-28238.png",
    lapizNegro:"https://i.postimg.cc/Ss6YBNCn/edit-icon-icons-com-50403.png",
    puntoBlanco:"https://i.postimg.cc/XN2VHdTt/punto-Blanco.png",
    delete:"https://i.postimg.cc/2SdQtMJS/delete.png",
    deleteNegro:"https://i.postimg.cc/D042wHhw/delete-black.png",
    mas: "https://i.postimg.cc/qv6m2hrY/mas3.png",
    subir:"https://i.postimg.cc/7Ym5YF4K/subir.png",
    separadorNegro:"https://i.postimg.cc/CLZYWxMK/separador-Negro.png",
    separadorBlanco:"https://i.postimg.cc/jjjr4x1K/separador-Blanco.png",
    info:"https://i.postimg.cc/T2jR0nRM/info-icon-147458.png",
    atras:"https://i.postimg.cc/wBfp0ST3/atras.png"
  };

  Link = {
    argPrograma:"https://www.argentina.gob.ar/produccion/transformacion-digital-y-economia-del-conocimiento/argentina-programa",
    facebook:"https://www.facebook.com/agugodzic/",
    instagram:"https://www.instagram.com/agugodzic/",
    gitHub:"https://github.com/Agugodzic",
    linkedin:"https://www.linkedin.com/in/agust%C3%ADn-godzic-109b09188/"
  };

  TituloSecundario = {
    institucion:"Colegio Nuestra Señora de Guadalupe",
  };
}
