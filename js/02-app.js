//  La manera de obtener los valores del localStorage, es con getItem('nombre de la clave')
const numero = localStorage.getItem('numero')
const nombre = localStorage.getItem('nombre')
const meses = localStorage.getItem('meses')
const producto = localStorage.getItem('producto')
const otroValor = localStorage.getItem('otroValor')

console.log(numero); // Cada uno de las variables que me trae, me las trae como string

console.log(otroValor); // muestra null, si no existe el valor

// Visto lo anterior y sobre todo para los tipos de datos como arrays y objetos, para recuperar su tipo usamos JSON.parse(el valor)

const mesesJSON = JSON.parse(meses);
console.log(mesesJSON); // Acá retomamos nuestro array

const productoJSON = JSON.parse(producto);
console.log(productoJSON);

console.log(typeof JSON.parse(numero));