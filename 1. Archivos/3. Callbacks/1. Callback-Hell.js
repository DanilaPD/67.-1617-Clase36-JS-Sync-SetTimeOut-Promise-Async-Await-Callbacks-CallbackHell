const dividir = (num1, num2, cb) => {
    // "cb" va a ser una función sin nombre, pero que la puedo llamar acá adentro. Va a ser el tercer parámetro y esta, a su vez, va tener 2 subparámetros.
    // El primer parámetro es el "error", el segundo es el "ok" (reject, resolve).
    if (num1 === 0 || num2 === 0) {
        cb(console.log("¡No podés dividir por cero!", null)); // Ahora sabe que tiene dos parámetros. En uno tiene que hacer "console.log" si hubo "error" (este "if" es el "error").
    } else {
        // El primero es nulo porque el "error" no existe.
        cb(null, (num1 / num2)); // El segundo valor ahora va a ser la cuenta. En el de "error", obviamente, la cuenta no tenía valor.
    };
};

// Al "cb" no le pongo nombre porque total no lo necesito afuera. Solo necesito que sea el tercer parámetro y que tengo dos subparámetros propios: "Error" y "result/ok".
dividir(15, 2, (error, result) => {
    if (error) {
        throw error;
    } else {
        console.log(result);
    };
});

// Ahora vamos a ver el infierno:
//! Callback Hell:
dividir(45, 5, (err, res1) => {
    if (err) {
        throw err;
    } else {
        console.log(res1);
        dividir(res1, 2, (err, res2) => {
            if (err) {
                throw err;
            } else {
                console.log(res2);
                dividir(res2, 3, (err, res3) => {
                    if (err) {
                        throw err;
                    } else {
                        console.log(res3);
                    }
                });
            }
        });
    }
});

//! ¡Esto no se hace! ¡Evitar!