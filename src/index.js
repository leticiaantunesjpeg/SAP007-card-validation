import validator from './validator.js';

document.getElementById("submit").addEventListener("click", validar)//ouve-se um evento ao clicar o botão submit e
                                                                    //redireciono para a função validar
function validar()
    {
    const valorNúmerodoCartão = document.getElementById("cardNumber").value; //variável que armazena o valor do nº do c.
    const result= validator.isValid(valorNúmerodoCartão)
    console.log(result)
   
    const esconderDígitos = validator.maskify(valorNúmerodoCartão)
    console.log(esconderDígitos)

    if (valorNúmerodoCartão == ""){ //condição para escrever no html caso o input do cardNumber estiver vazio 
        document.getElementById("cardNumber").value;
        document.getElementById("resultado").innerHTML="Insira um número válido";
    }  
    else if (result == true){ //condição para escrever no html caso o número do cartão for válido
        document.getElementById("cardNumber").value;
        document.getElementById("resultadoPositivo").innerHTML="O número do cartão é válido";
    }
    else { //condição para escrever no html caso o número do cartão for inválido
        document.getElementById("cardNumber").value;
        document.getElementById("resultadoNegativo").innerHTML="O número do cartão é inválido, revise-o";
    }
    
    };