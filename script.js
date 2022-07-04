const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

const soma = document.getElementsByClassName("button")[0];
const sub = document.getElementsByClassName("button")[1];
const divisao = document.getElementsByClassName("button")[2];
const multiplicacao = document.getElementsByClassName("button")[3];

function getOperação() {
  soma.addEventListener("click", function () {
    document.getElementById("pResult").innerHTML =
    parseInt(input1.value) + parseInt(input2.value);
  });

  sub.addEventListener("click", function () {
    document.getElementById("pResult").innerHTML =
    parseInt(input1.value) - parseInt(input2.value);
  });

  divisao.addEventListener("click", function () {
    document.getElementById("pResult").innerHTML =
    parseInt(input1.value) / parseInt(input2.value);
  });

  multiplicacao.addEventListener("click", function () {
    document.getElementById("pResult").innerHTML =
    parseInt(input1.value) * parseInt(input2.value);
  });

}
getOperação();