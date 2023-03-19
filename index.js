function laCajaDePandora(numero) {

    //Si es un número par, debe convertirlo a binario y retornarlo, 
    //y si es impar, convertirlo a hexadecimal y retornarlo.


    if (numero % 2 == 0) {

        var binario = [];
        while (numero > 0) {
            binario.unshift(numero % 2);
            numero = Math.floor(numero / 2);
        }
        return binario.join('');
    }

    else {

        var hexadecimal = [];
        while (numero > 0) {
            hexadecimal.unshift(numero % 16);
            numero = Math.floor(numero / 16);
        }
        return hexadecimal.join('');

    }


}

function Celina() {
    return ({
        name: 'Celina',
        age: '43',
        nacionalidad: 'arg'
    })
}


