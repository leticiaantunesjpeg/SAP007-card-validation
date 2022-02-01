import validator from './validator.js';

document.getElementById("submit").addEventListener("click", function()
    {
    const valorNúmerodoCartão = document.getElementById("cardNumber").value;
    const result= validator.isValid(valorNúmerodoCartão)
    console.log(result)
   
    const esconderDígitos = validator.maskify(valorNúmerodoCartão)
    console.log(esconderDígitos)

    if (valorNúmerodoCartão == ""){
        document.getElementById("cardNumber").value;
        document.getElementById("resultado").innerHTML="Insira um número válido";
    }  
    else if (result == true){
        document.getElementById("cardNumber").value;
        document.getElementById("resultadoPositivo").innerHTML="O número do cartão é válido";
    }
    else {
        document.getElementById("cardNumber").value;
        document.getElementById("resultadoNegativo").innerHTML="O número do cartão é inválido, revise-o";
    }
    
    }
); 