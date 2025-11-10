const CONTAINER_PRINCIPAL= document.getElementById('container-principal');
CONTAINER_PRINCIPAL.classList.add('container');

//---------------------------------------------------------------------------------

const cabecera = document.createElement('header');

cabecera.classList.add('cabecera');


const titulo=document.createElement('h1');

titulo.classList.add('titulo-principal')

titulo.textContent='Titulo principal';


cabecera.appendChild(titulo)


CONTAINER_PRINCIPAL.appendChild(cabecera);

//-------------------------------------------------------------------------------------

const navegador= document.createElement('nav');

navegador.classList.add('navegador');

const Ir_a= document.createElement('a');

Ir_a.textContent='Ir a...';

Ir_a.href='https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-top';
Ir_a.target='_blank';

Ir_a.classList.add('Ir');

navegador.appendChild(Ir_a);


CONTAINER_PRINCIPAL.appendChild(navegador);

//---------------------------------------------------------------------------------------

const seccion= document.createElement('section');

seccion.classList.add('container-secundario');

const cuadro1= document.createElement('div');

cuadro1.classList.add('cuadro1');

const cuadro2= document.createElement('div');

cuadro2.classList.add('cuadro2');

seccion.appendChild(cuadro1);
seccion.appendChild(cuadro2);


CONTAINER_PRINCIPAL.appendChild(seccion);

//----------------------------------------------------------------------------------------

const pie_de_pagina= document.createElement('footer');

pie_de_pagina.classList.add('pie');

pie_de_pagina.textContent="Pie de pagina 2025";

CONTAINER_PRINCIPAL.appendChild(pie_de_pagina);

//------------------------------------------------------------------------------------------

const video = document.createElement('video');

video.classList.add('video');

video.src="./videos/videoplayback.mp4";
video.controls=true;
video.width=150;
video.heigth=250;

cuadro1.appendChild(video);

//--------------------------------------------------------------------------------------------------

const imagen= document.createElement('img');

imagen.src="./imagenes/ratones_paranoicos.jfif";
imagen.alt="logo ratones";
imagen.width=150;

cuadro2.appendChild(imagen);

//--------------------------------------------------------------------------------------------------------