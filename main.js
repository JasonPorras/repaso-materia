// SELECCIONAR ELEMENTOS

//Esto es para seleccionar ELEMENTOS del HTML.
console.log(document.querySelector('h1'));

//Este es para seleccinar la CLASE que queremos agarrar.
console.log(document.querySelector('.parrafo'));

//Este es para seleccionar el ID que tenga el elemento.
console.log(document.querySelector('#texto'));

//Selecciona el ID para desea agarrar...
console.log(document.getElementById('texto'));

//Selecciona TODO lo que tenga la clase que usted escoja...
console.log(document.getElementsByClassName('parrafo'));

//Selecciona todos los elementos del HTML.
console.log(document.querySelectorAll('p'));

//---------------------------------------------------------------
// IMPRIMIR CONTENIDO Y ELEMENTOS

//Sirve para cambiar los que tengan en el contenido de manera dinamica...
//Ocupamos guardar el elemento para hacerle el cambio..
//solo contenido..

const titulo = document.querySelector('h1'); //Selecciona el elemento que desea cambiar...
titulo.textContent = 'Yo soy Superman';

//Sirve para agregar contenido tambien permite ingresar elementos. 
const nuevo = document.querySelector('.parrafo'); //Selecciona el elemento que desea cambiar...
nuevo.innerHTML = 'Hola mi nombre es Jason';

//Un ejemplo para diferenciar entre inner y content es ...

//con content no puedo crear mas elementos.
const error = document.querySelector('.ejemplo'); //Selecciona el elemento que desea cambiar...
error.textContent = '<p>Prueba</p>';
console.log (error);

//con inner me permite ingresar elementos con el contenido que deseo
const prueba = document.querySelector('.ejemplo2'); //Selecciona el elemento que desea cambiar...
prueba.innerHTML = '<p>Prueba</p>'
console.log (prueba);

//------------------------------------------------------------

// ELIMINAR Y AGREGAR CLASES...

//agregar clases...

const partido = document.querySelector('.liga');
partido.classList.add('heredia');
console.log (partido);

//eliminar clases...

//const partido = document.querySelector('.liga');
partido.classList.remove('heredia');
//console.log (partido);
