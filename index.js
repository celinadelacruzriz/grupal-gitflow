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


function rocio(){
    return (
        {
            nombre: 'Rocio',
            edad: '28',
            nacionalidad: 'Argentina'
        }
    )
}

function matias() {
    return {
        name: "Matias",
        age: 21,
        nationality: "Argentina"
    }
}


  function javier() {
    return {
      name: "Javier",
      age: 39,
      nationality: "Argentino"
    }
  }
