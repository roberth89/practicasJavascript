var main = function() {

    const letrasLista = [
        'a',
        'b',
        'c',
        'd'
    ];

    // Ejemplo Map con Flecha
    function ejemploFlechaListaMap(params) {

        console.log(letrasLista.map(letrasLista => letrasLista));
    }

    // Ejemplo con flecha obtener valor.
    let getTextBoxNumeros = a => document.getElementById("txtNumeros").value;

    // En la fórmula Factorial se deben multiplicar todos los números enteros y positivos
    // que hay entre el número que aparece en la fórmula y el número 1.
    // 7! = 1 * 2 * 3 * 4 * 5 * 6 * 7 = 5.040

    // Ejemplo de un ciclo.
    function factorialConCiclo(num) {
        let resultado = 1;

        // debe comenzar en 2 e iterar por el numero que se envia por parametro.
        for (let i = 2; i <= num; i++) {
            //console.log(`resultado = ${resultado} = ${i} * (${resultado * i})`);
            resultado *= i;
        }
        return resultado;
    }

    // Ejemplo recursivo factorial
    function factorialRecursivo(num) {
        if (num === 1) {
            // console.log("salir");
            return 1;
        } else {
            // console.log(`retonra ${num} * factorialRecursivo(${num - 1})`);
            return num * factorialRecursivo(num - 1);
        }
    }


    function init() {
        ejemploFlechaListaMap();
        let resultado = factorialConCiclo(7);
        let resultadoRecursivo = factorialRecursivo(7);
        alert(`resultado Ciclo ${resultado} `);
        alert(`resultado Recursivo ${resultadoRecursivo} `);
    }


    return {
        FnInit: init
    }

}();