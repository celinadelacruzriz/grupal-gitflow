function laCajaDePandora(numero){
    // proximamente escribiremos codigo aqui

    if(numero % 2 === 0) {
        
    var num = numero 
    var binario = ""
    while(num > 1) {
       binario = binario + (num % 2 === 0 ? 0 : 1)
       num = num / 2
     
       }
     binario = binario.split('').reverse().join('');
     return binario
     }

    else {
     return "codigo hexadecimal"
    }

    }


function matias() {
    return {
        name: "Matias",
        age: 21,
        nationality: "Argentina"
    }
}