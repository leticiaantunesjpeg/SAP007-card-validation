const validator = {
  isValid: (valorNúmerodoCartão) => {
    let numPar = 0;  //variável que vai trabalhar com os números nas posições pares
    let numImp = 0; //variável que vai trabalhar com os números nas posições ímpares

    valorNúmerodoCartão = valorNúmerodoCartão.split("").reverse(); //transormar em array e aplicar o reverse
    for (let i = 0; i < valorNúmerodoCartão.length; i++) {
      if (i % 2 === 1) {  //verifica-se se a posição é par, já que o índice começa a contagem do 0 
        if (valorNúmerodoCartão[i] * 2 >= 10) { //se o número ao ser multiplicado por 2 for >=10,
          numPar += ((valorNúmerodoCartão[i] * 2) - 9); //diminuir 9
        } else { //se não, apenas multiplica por dois
          numPar += valorNúmerodoCartão[i] * 2;
        }

      } else { //para os números de posição ímpar,apenas são armazenados intactos
        numImp += parseInt(valorNúmerodoCartão[i]);
      }

    }
    if ((numPar + numImp) % 10 === 0){ //se a soma dos números ímpares e pares resultar em um número divisivel por 10,
      return true; //é válido
    }
    else { //se não, inválido
      return false
    }

  },


  //função de mascarar o número, entre parênteses está o valor do número do cartão
  maskify: (valorNúmerodoCartão) => {
    valorNúmerodoCartão = valorNúmerodoCartão.split("");

      for (let i = 0; i < valorNúmerodoCartão.length - 4; i++) {
        valorNúmerodoCartão[i] = "#";
      }
      let join = valorNúmerodoCartão.join("");

      return join;
    },

};

export default validator