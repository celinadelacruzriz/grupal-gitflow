function laCajaDePandora(numero){
    if (Number.isInteger(numero)){
        if (numero%2===0){
            return cambioBinario(numero)
        }else return numero.toString(16);
    }
    }



function cambioBinario(num) {   
let binario= '';                    
while (num!==0){                    
binario+= num%2;                  
num= Math.floor(num/2);          
}
return binario.split('').reverse().join('');  
}

