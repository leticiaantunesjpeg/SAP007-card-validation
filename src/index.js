import validator from './validator.js';

import validator from  './validator.js';

console.log(validator);

//Captura do valor do input pelo botão submit//
let botão= document.getElementById('submit');
botão.addEventListener('click', captura);

function captura(){
    const creditCardNumber = document.getElementById('cardNumber').value;
    let requisitos = creditCardNumber.length;
    if(requisitos == 0){
        alert('Insira um número');
        return false;
    }
    if(requisitos < 16){
        alert('Número incompleto');
        return false;
    }
}