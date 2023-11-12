var cartaoElement = document.getElementById('cartao');
var anoInput = document.getElementById('ano-expiracao');

anoInput.addEventListener('input', function() {
  if (anoInput.value.length === 4) {
    cartaoElement.classList.add('virar');
  } else {
    cartaoElement.classList.remove('virar');
  }
});
