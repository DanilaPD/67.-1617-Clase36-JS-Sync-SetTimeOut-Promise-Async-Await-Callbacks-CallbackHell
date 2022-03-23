const menu = [{
        id: 1,
        type: "desayuno",
        nombre: "café y dos medialunas",
    },
    {
        id: 2,
        type: "almuerzo",
        nombre: "bife a caballo",
    },
    {
        id: 3,
        type: "merienda",
        nombre: "tostado",
    },
];

const getInfo = () => {
    // El primer paso es crear la "promesa" nueva:
    // "Resolve" es el "caso feliz". "Reject" es "falló por algún motivo".
    return new Promise((resolve, reject) => { // Con "Resolve", le decimos que eventualmente van a llegar los datos para resolverlo.
        setTimeout(() => {
            console.log("Uf, uf, ¡ahí llegué!");
            resolve(menu);
            reject(() => console.log("¡Hubo un error!"))
        }, 2000);
    })
};

// Ahora, con la "promesa", "getInfo" va a esperar a que lleguen los datos.
getInfo()
    // Y entonces... hacé tal cosa.
    .then((menu) => console.log(menu))
    // Podemos tener muchos then".
    .then(() => console.log("¡Qué alegría!"))
    // Este segundo "then" depende de que funcione el primero.
    .catch((err) => console.log(err))
    // "Catch" es para todos.
    .finally(() => console.log("Eso es todo amigos"))
// "Finally" se ejecuta con "then" y con "catch". Es optativo.