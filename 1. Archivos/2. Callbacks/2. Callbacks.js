//? https://developer.mozilla.org/es/docs/Glossary/Callback_function
//? https://www.javascripttutorial.net/javascript-callback/

const userName = document.getElementById("nombre");

const getUserName = (callback) => {
    let user = prompt("¡Decinos tu nombre! Te has ganado un millón de dólares.");
    // Me traigo por parámetro la otra función y lo que capture "user" es lo que va a recibir la otra.
    callback(user);
}

//* console.log("user", user); 
// Acá rompería porque "user" vive adentro de "getUserName". Esto daría "undefined".

// Recibe el nombre y hace algo:
const sayHello = (nombre) => {
    alert("Hola" + nombre);
    userName.innerHTML = nombre;
};

getUserName(sayHello);