/* O Texto aparece na tela, nesse caso não estamos utilizando a função, fazendo com que o codigo fique um pouco extenso

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um Número entre 1 e 10';


*/

/* O Texto aparece na tela, porem agora estamos utlizando a função e o parametro tmb, que nesse caso é a tag e o texto que estão
como parametros da função */
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
// aqui estamos invocando a função exibirTextoNaTela, e utlizando os parametros
exibirTextoNaTela("h1", "Jogo do Número secreto");
exibirTextoNaTela("p", "Escolha um Número entre 1 e 10");
}

exibirMensagemInicial();


function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você Descobriu o numero da Sorte com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela("p", mensagemTentativas);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior");
      document.getElementById('reiniciar').removeAttribute('disabled');
    }
    tentativas++;
    limparCampo();
  }
}

// essa função ela faz o retorno, por isso utilizamos o return, para que ela volte algo
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
  }

  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disable', true)

}

//                                                         Exercicios

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora do desafio';

// function verificarChute(){
//     console.log('o botão foi clicado')

// }

// function exibirMensagemNoConsol(){
//     console.log('Eu amo JS')
// }

// function exibirAlerta(){
//     prompt('Eu amo JS')
// }

// function exibirPrompt(){
//     let nomeDaCidade = prompt('Digite o nome da Cidade');
//     alert(`Estive em ${nomeDaCidade} e lembrei de você`);

// }

// function somandoDoisNumeros(){
//     let num1 = parseInt(prompt('Digite o Primeiro Numero'));
//     let num2 = parseInt(prompt('Digite o Segundo Numero'));
//     let resultado = num1 + num2;
//     alert(`${num1} + ${num2} = ${resultado}`)

// }

//                                              HTML

{
  /* <button onclick="exibirMensagemNoConsol()" class="container__botao">Clicar</button>
<button onclick="exibirAlerta()" class="container__botao">Alert</button>
<button onclick="exibirPrompt()" class="container__botao">Prompt</button>
<button onclick="somandoDoisNumeros()" class="container__botao">Soma</button> */
}
