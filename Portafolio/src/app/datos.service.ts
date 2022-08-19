import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DatosService {

  constructor() { }

  Banner = [
    {indice:0,link:"https://i.postimg.cc/vB4rzrQX/banner2.png"},
    {indice:1,link:"https://i.pinimg.com/originals/0f/81/ac/0f81ac43b11ce36b81d803077f7584b0.jpg"},
    {indice:2,link:"https://i.postimg.cc/VNjZ5sfP/banner3.png"},
    {indice:3,link:"https://i.postimg.cc/bw5KTbST/close-up-image-of-programer-working-at-his-desk-in-office.png"},
    {indice:4,link:"https://i.postimg.cc/C5Hgr1pK/banner4.jpg"}
    ];

  Foto = [
    {id:0 , link:"https://i.postimg.cc/Yq1STwMq/imagenCV.png"},
    {id:1 , link:"https://i.postimg.cc/TKBs7w71/perfil2.jpg"},
    {id:2 , link:"https://i.postimg.cc/Xp7tXtBj/perfil3.jpg"},
    {id:3 , link:"https://i.postimg.cc/VJJTWMF2/perfil4.jpg"},
  ]

  Imagen = {
    logIn:"https://i.postimg.cc/N0YyV1d9/log-in.png",
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

  Info = {
    otros:"Ciudadania Italiana",
    ciudad:"Santa Fe",
    codigoPostal:"3000",
    telefono:"342 5419964",
    pais:"Argentina",
    edad:25,
    nombre:"Agustín",
    apellido:"Godzic",
    email:"agugodzic@gmail.com",
    titulo:"Full Stack Developer Jr",
    sobreMi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  };

  Experiencia = [
    {
      id:0,
      puesto:"Desarollador Full Stack Jr",
      empresa:"Tech y Dev S.A",
      tiempo:5,
      unidad:"años"
    },
    {
      id:1,
      puesto:"Desarollador Java",
      empresa:"Tecno Solutions S.A",
      tiempo:5,
      unidad:"años"
    },
    {
      id:2,
      puesto:"php Back End Developer",
      empresa:"Infiny Des",
      tiempo:4,
      unidad:"años"
    },
    {
      id:3,
      puesto:"Desarollador Front End Sr",
      empresa:"Tech y Dev S.A",
      tiempo:8,
      unidad:"meses"
    },
  ];

  Habilidades = [
    {
      id:0,
      habilidad:"Photoshop",
      nivel:75
    },
    {
      id:1,
      habilidad:"Word",
      nivel:90
    },
    {
      id:2,
      habilidad:"Excel",
      nivel:70
    },
    {
      id:3,
      habilidad:"Python",
      nivel:65
    },
    {
      id:4,
      habilidad:"Angular",
      nivel:75
    },
    {
      id:5,
      habilidad:"Html",
      nivel:80
    },
    {
      id:6,
      habilidad:"CSS",
      nivel:70
    },
    {
      id:7,
      habilidad:"GitHub",
      nivel:80
    },
    {
      id:8,
      habilidad:"Typescript",
      nivel:70
    }

  ];

  Proyectos = [
    {
      id:0,
      titulo:"Portafolio Argentina",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      linkPreview:"",
      linkGitHub:"",
      linkImagen:"https://i.postimg.cc/bw36jQRs/preview-portafolio.png",
      estado:"En desarrollo"
    },
    {
      id:1,
      titulo:"Tienda Online de Hardware",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      linkPreview:"",
      linkGitHub:"",
      linkImagen:"https://i.postimg.cc/NjgNVNm3/preview-Tienda.png",
      estado:"En desarrollo"
    },
    {
      id:2,
      titulo:"Backing Tracks Online",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      linkPreview:"",
      linkGitHub:"",
      linkImagen:"",
      estado:"En desarrollo"
    }
  ];

  Cursos = [
    {
      id:0,
      titulo:"Programador Web Full-Stack Junior",
      institucion:"Argentina Programa",
      descripcion:""
    },
    {
      id:1,
      titulo:"Fundamentos del Marketing Digital",
      institucion:"Google Activate",
      descripcion:""
    }
  ];

  TituloSecundario = {
    institucion:"Colegio Nuestra Señora de Guadalupe",
  };

  TituloUniversitario = [];

  Terciario = [];

  UniversitarioIncompleto = [
    {
      id:0,
      carrera:"Licenciatura en Economia",
      institucion:"Facultad de ciencias economicas - UNL"

    },
    {
      id:0,
      carrera:"Analista Industrial",
      institucion:"Facultad ingenieria quimica - UNL"
    }
  ];
}
