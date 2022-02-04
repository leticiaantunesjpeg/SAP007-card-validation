import validator from "./validator.js";

document.getElementById("submit").addEventListener("click", validar); //ouve-se um evento ao clicar o botão submit e
//redireciono para a função validar
function validar() {
  const valorNúmerodoCartão = document.getElementById("cardNumber").value; //variável que armazena o valor do nº do c.
  const result = validator.isValid(valorNúmerodoCartão);
  console.log(result);

  const esconderDígitos = validator.maskify(valorNúmerodoCartão);
  console.log(esconderDígitos);
  if (result === true) {
    document.getElementById("cardNumber").value = esconderDígitos;
  } //condições criadas para mascarar o valor do input após a validação

  if (valorNúmerodoCartão == "") {
    //condição para escrever no html caso o input do cardNumber estiver vazio
    document.getElementById("resultado").innerHTML = "Insira um número válido";
  } else if (result == true) {
    //condição para escrever no html caso o número do cartão for válido
    document.getElementById("resultado").innerHTML =
      "O número do cartão é válido";
    document.getElementById("resultado").style.color = "green";
  } else {
    //condição para escrever no html caso o número do cartão for inválido
    document.getElementById("resultado").innerHTML =
      "O número do cartão é inválido, revise-o";
      document.getElementById("resultado").style.color = "red";
  }
}
