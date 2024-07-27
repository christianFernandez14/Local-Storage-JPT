// El local Storage, pertenence a la ventana global.
// Consologuea windown en el navegador, para que lo puedas ver como una propiedad

// localStorage, es una propiedad que maneja dos valores, "clave" y "valor"

localStorage.setItem('nombre', 'Christian'); // Para colocar los valores en el storage, usamos setItem; para ubicar esos valores, tienes que ir Aplication.

localStorage.setItem('numero', 1); // Veras que el 1 es un string


// Hay otro que llama sessionSotarge; la difercnia, es el tiempo que perdura los datos, aca solo perdura mientra esten abierto el navegador
sessionStorage.setItem('nombre', 'Christian')


// Conversion de String un dato especifico que estemos trabajando:

const producto = {
  nombre: "Monitor 24 pulgadas",
  precio: 300
}

const productoString = JSON.stringify(producto) // este es el resultado.. {"nombre":"Monitor 24 pulgadas","precio":300}
console.log(productoString); // Aca puedes ver es un string
console.log(typeof productoString); // lo corroboras

// Y de esta manera pudes guardarlo en el Storage.

localStorage.setItem('producto', productoString); // Ya almacenado...


// Tambien funciona perfectamente con los Arrays.

const meses = ['enero', 'febrero', 'marzo'];

localStorage.setItem('meses', JSON.stringify(meses));



/**A consierar
 * 
 * 1.- El storage, solo guarada "Strings".
 * 
 * 2.- Puedo usar metodos, par convertir el tipo de dato en String, y este es JSON.stringify()
 * 
 * 
 */