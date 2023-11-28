//JS para o Carrossel 

const imagens = ["planos/Plano1.jpg", "planos/Plano2.jpg", "planos/Plano3.jpg"];
const tempo = 2000;
let contador = 1;

function Exibindo() {
  document.images["slide"].src = imagens[contador - 1];

  contador = (contador % imagens.length) + 1;
}

function Anterior() {
  contador = contador === 1 ? imagens.length : contador - 1;

  document.images["slide"].src = imagens[contador - 1];

  clearInterval(mostrar);
  mostrar = setInterval(Exibindo, tempo);
}

function Proximo() {
  document.images["slide"].src = imagens[contador - 1];

  contador = (contador % imagens.length) + 1;

  clearInterval(mostrar);
  mostrar = setInterval(Exibindo, tempo);
}

let mostrar = setInterval(Exibindo, tempo);

// JS para o Cartão de crédito 
var cartaoElement = document.getElementById('cartao');
var anoInput = document.getElementById('ano-expiracao');
var numcvv = document.getElementById('CVV');

anoInput.addEventListener('input', function() 
{
  if (anoInput.value.length == 4) 
  {
    /*se a quatidade de números no campo ANO é 4 dígitos
    troca-se o valor da "class" de "visível" para "invisível"*/ 
    document.getElementById("cartao-frente").className = document.getElementById("cartao-frente").className.replace("cartao-frente visivel","cartao-frente invisivel");
    document.getElementById("cartao-tras").className = document.getElementById("cartao-tras").className.replace("cartao-tras invisivel","cartao-tras visivel");
    document.getElementById("faixa").className = document.getElementById("faixa").className.replace("faixa invisivel","faixa visivel");
  } 
  else 
  {
    cartaoElement.classList.remove('virar');
  }

});

  numcvv.addEventListener('input', function() 
  {
    if (numcvv.value.length == 3)
     {
      /*se a quatidade de números no campo CVV é 3 dígitos
        coloca-se o foco do cursor no campo NOME"*/ 
      document.getElementById("nome-pet").focus();
     }
});
