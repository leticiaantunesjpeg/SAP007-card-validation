
const validator = {
  isValid: function(valorNúmerodoCartão){
     /*variável Carray tranforma a string obtida do input para array*/
     let Carray = valorNúmerodoCartão.split("");
    
     /*variável CarrayInertido reverte a posição do array*/
     let CarrayInvertido = Carray.reverse();

     /*variável da soma*/
     let Soma = 0

     /*loop for e condições if para percorrer o array enquanto o indíce for menor que o tamanho do array,
      localizar as posições pares, multiplicá-las por 2 e subtrair 9 dos dígitos maiores que 9*/
     for (let i = 0; i < CarrayInvertido.length; i++) {
      if (i % 2 !== 0) {
        CarrayInvertido[i] = CarrayInvertido[i] * 2;
        if (CarrayInvertido[i] > 9) {
          CarrayInvertido[i] = CarrayInvertido[i] - 9;
          Soma += CarrayInvertido[i];
        }
      }
    }

    if (Soma % 10 == 0) {//Se o numero for divisivel por 10
      return true; //então é verdadeiro
    }
    return false; //Se não, falso

  },


  //função de mascarar o número, entre parênteses está o valor do número do cartão
  maskify: function(valorNúmerodoCartão){
      const esconderDígitos = Array.from(valorNúmerodoCartão);
  
      for (let i = 0; i < esconderDígitos.length - 4; i++) {
        esconderDígitos[i] = "#";
      }
      let join = esconderDígitos.join("");
  
      return join;
    },
  };

export default validator
