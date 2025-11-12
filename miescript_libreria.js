const CONTAINER_PRINCIPAL= document.getElementById('container-principal');
CONTAINER_PRINCIPAL.classList.add('container');

//---------------------------------------------------------------------------------

const cabecera = document.createElement('header');

cabecera.classList.add('cabecera');


const titulo=document.createElement('h1');

titulo.classList.add('titulo-principal')

titulo.textContent='MVL';


cabecera.appendChild(titulo)


CONTAINER_PRINCIPAL.appendChild(cabecera);

//-------------------------------------------------------------------------------------



const navegador= document.createElement('nav');

navegador.classList.add('navegador');


const Inicio= document.createElement('a');

Inicio.textContent='Inicio';

Inicio.href='./index.html';

navegador.appendChild(Inicio);




const libreria= document.createElement('a');

libreria.textContent='Libreria';

libreria.href='./libreria.html';
/*libreria.target='_blank';*/

libreria.classList.add('libreria');

navegador.appendChild(libreria);








const cotillon= document.createElement('a');

cotillon.textContent='Cotillon';

cotillon.href='./cotillon.html';
/*cotillon.target='_blank';*/

cotillon.classList.add('cotillon');

navegador.appendChild(cotillon);


const almacen= document.createElement('a');

almacen.textContent='Almacen';

almacen.href='./almacen.html';
/*cotillon.target='_blank';*/

cotillon.classList.add('almacen');

navegador.appendChild(almacen);



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


const imagen= document.createElement('img');

imagen.src="./imagenes/utiles_1.jfif";
imagen.alt="logo utiles_1";
imagen.width=150;

cuadro2.appendChild(imagen);

const imagen1= document.createElement('img');

imagen1.src="./imagenes/utiles_2.png";
imagen1.alt="logo utiles_2";
imagen1.width=150;

cuadro1.appendChild(imagen1);
