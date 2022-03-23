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

//* Se ejecuta después por el "setTimeOut":
const getInfo = () => {
    setTimeout(() => {
        console.log("Uf, uf, ¡ahí llegué!");
        return menu;

    }, 1000);
};

// Dio "undefined" porque esos "console.log" y "getInfo" son sincrónicos, no esperan a los datos. No saben qué va a llegar, buscan y no lo encuentran.

//* Se ejecuta antes:
console.log(getInfo());