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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(menu);
            reject((err) => console.log(err));
        }, 2000);
    });
};

// "Async" significa que los datos van a llegar en algún momento.
const result = async () => {
    // "Try" es un intentá hacerlo. Si sale, hacés lo de adentro.
    try {
        console.log(await getInfo()); // Esperá a que llegue "getInfo".
    } catch (error) { // "Catch" es agarrá el error, no lo dejes ahí suelto.
        console.log(error);
    }
    // Acá iría el "finally".
}

result();

//! La síntaix cuando no es de flecha es levemente distinta:

//! async function getInfo() {
//! }