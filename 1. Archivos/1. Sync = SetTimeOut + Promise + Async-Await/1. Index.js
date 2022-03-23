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

//* console.log(info[1].type);

const getInfo = () => {
    return menu;
}

console.log(getInfo());