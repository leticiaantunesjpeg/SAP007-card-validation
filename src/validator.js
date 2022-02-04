const validator = {
  isValid: (valorNúmerodoCartão) => {
    let numParImp = 0; //variável que vai trabalhar com os números nas posições pares

    valorNúmerodoCartão = Array.from(valorNúmerodoCartão).reverse(); //transormar em array e aplicar o reverse
    for (let i = 0; i < valorNúmerodoCartão.length; i++) {
      if (i % 2 === 1) {
        //verifica-se se a posição é par, já que o índice começa a contagem do 0
        if (valorNúmerodoCartão[i] * 2 >= 10) {
          //se o número ao ser multiplicado por 2 for >=10,
          numParImp += valorNúmerodoCartão[i] * 2 - 9; //diminuir 9
        } else {
          //se não, apenas multiplica por dois
          numParImp += valorNúmerodoCartão[i] * 2;
        }
      } else {
        //para os números de posição ímpar,apenas são armazenados intactos
        numParImp += parseInt(valorNúmerodoCartão[i]);
      }
    }
    return numParImp % 10 === 0;
  },

  //função de mascarar o número, entre parênteses está o valor do número do cartão
  maskify: (valorNúmerodoCartão) => {
    valorNúmerodoCartão = Array.from(valorNúmerodoCartão); //transforma-se o valor do input de string para array

    for (let i = 0; i < valorNúmerodoCartão.length - 4; i++) {
      //enquanto percorre o array, menos os 4 últimos dígitos
      valorNúmerodoCartão[i] = "#"; //substitui o dígito por "#"
    }
    let join = valorNúmerodoCartão.join(""); //transforma-se em string de novo

    return join; //e retorna o resultado
  },
};

export default validator;
