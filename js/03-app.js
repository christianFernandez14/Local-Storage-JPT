// Para eliminar un registro usa el metodo del local Storage "removeItem(nombre de la clave)"

console.log(window.localStorage) // una vez que corra la linea 8, en este clg tampoco lo veras

// Eliminemos el Número
localStorage.removeItem('numero')

console.log(window.localStorage);

// En una aplicación web, debe contar con el CRUD, en localStorage no cuenta con el UPDATE, actualizar, pero puedes jugar con las propiedades con que cuentas.

// Actualicemos una propiedad.

const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Nuevo mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray)) // Acá sobre escribimos local Storage


// Y como ultimo, tenemos el metodo de limpia todo el storage y es .clear()

// localStorage.clear(); // Al correr esta linea se borra todo lo que hay en el storage.
