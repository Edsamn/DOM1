const elementoHTML = document.getElementById("contador");
let valorAtual = 0;

function incrementar() {
  valorAtual++;
  elementoHTML.innerText = `O contador está com ${valorAtual} cliques`;
}

function zerar() {
  elementoHTML.innerText = ``;
  if (valorAtual > 0) {
    valorAtual = 0;
  }
}
