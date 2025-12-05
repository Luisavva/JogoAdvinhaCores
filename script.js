const cores = [
  'vermelho',
  'azul',
  'verde',
  'amarelo',
  'roxo',
  'laranja',
  'rosa',
  'preto',
  'branco',
  'marrom'
]
const mapaCores = {
  vermelho: 'red',
  azul: 'blue',
  verde: 'green',
  branco: 'white',
  amarelo: 'yellow',
  roxo: 'purple',
  laranja: 'orange',
  rosa: 'pink',
  preto: 'black',
  cinza: 'gray',
  marrom: 'brown'
};

let corSorteada;
let tentativas;

const entradaCor = document.getElementById('entradaCor');
const btnAdivinhar = document.getElementById('btnAdivinhar');
const btnReiniciar = document.getElementById('btnReiniciar');
const mensagem = document.getElementById('mensagem');
const tentativasEl = document.getElementById('tentativas');

function iniciarJogo() {
  corSorteada = cores[Math.floor(Math.random() * cores.length)];
  tentativas = 3;
  tentativasEl.textContent = tentativas;
  mensagem.textContent = '';
  entradaCor.value = '';
  btnAdivinhar.disabled = false;
  btnReiniciar.style.display = 'none';
}

function adivinharCor() {
  const corDigitada = entradaCor.value.trim().toLowerCase();

  if (!corDigitada) {
    mensagem.textContent = 'Digite uma cor!';
    return;
  }

  // verifica se a cor digitada existe no dicionário
  if (mapaCores[corDigitada] && mapaCores[corDigitada] === corSorteada) {
    document.body.style.backgroundImage = "none"; // remove imagem
    document.body.style.backgroundColor = corSorteada; // aplica cor sorteada
    mensagem.textContent = '🎉 Parabéns! Você acertou!';
    btnAdivinhar.disabled = true;
    btnReiniciar.style.display = 'inline-block';
  } else {
    tentativas--;
    tentativasEl.textContent = tentativas;
    if (tentativas > 0) {
      mensagem.textContent = `❌ Errou! Tente outra cor`;
      entradaCor.value = '';
    } else {
      mensagem.textContent = `Fim de jogo! A cor era: ${corSorteada}`;
      btnAdivinhar.disabled = true;
      btnReiniciar.style.display = 'inline-block';
    }
  }
}

btnAdivinhar.addEventListener('click', adivinharCor);
btnReiniciar.addEventListener('click', iniciarJogo);


iniciarJogo();
