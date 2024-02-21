function clicarBotao() {
  const nome = prompt("Digite seu nome");
  const elemento = document.getElementsByTagName("p");
  elemento[0].innerText = `E aí ${nome}! Você está deixando seu site dinâmico.`;
}
