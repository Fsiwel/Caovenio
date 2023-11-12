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

anoInput.addEventListener('input', function() {
  if (anoInput.value.length === 4) {
    cartaoElement.classList.add('virar');
  } else {
    cartaoElement.classList.remove('virar');
  }
});
