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

//------------------------------------------------------------

//INGRESAR ELEMENTOS al HTML Y CONTENIDO DESDE EL JS.

//Esto seria para ingresar solo un elemento...
//Creamos una constante con el valor del documento con el elemento que seleccionamos...
//En este caso el ul por que es como el contenedor y vamos a ingresar un li...
const listaDeCompras = document.querySelector('ul');

//Hacemos una constante con el valor del document que nos permite crear el elemento que deseamos...
const li = document.createElement('li')
li.textContent = "Manzana"; // le ingresamos contenido al li...
//En este punto el li creado se encuentra flotando en la pagina web,,,

//Entonces para colocarla donde queremos vamos a utilizar lo siguiente...
listaDeCompras.appendChild(li); //en listaDeCompras es la constante donde estamos guardando el contenedor 
//Y le estamos indicando que a ese contenedor creale un hijo con la constante de li que fue el elemento que se creo....

//Ahora vamos con trabajar con array para ingresar mas elementos y no repetir todo el codigo....

//Creamos una constante con el valor del documento con el elemento que seleccionamos...
//En este caso el ul por que es como el contenedor y vamos a ingresar un li...
const listaCompras = document.querySelector('ol');

//creamos una constante con la lista de productos que deseamos ingresar...
const comida = ["Huevos","Leche","Carne","Verduras"];

//for
for (let i = 0; i < comida.length; i++){//el for es para recorrer cada posicion del array el irlas colocando en el ul...
  const li = document.createElement('li')
  li.textContent = comida[i];
  listaCompras.appendChild(li); 
}

//forEach
comida.forEach((item) => {
  const li = document.createElement('li')
  li.textContent = item;//va a escribar lo que recorra en el momento...
  listaCompras.appendChild(li); 
})
