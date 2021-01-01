console.log("Versão: 1.15")

var money = 1;
var lemonqtd = 1;

// Preços

var lemonPrice = 10;

// Comprar estabelecimento
function buyLemon() {
    if (money>=lemonPrice) {
        money = money-lemonPrice;
        document.querySelector('#money').innerHTML = money.toFixed(2); // Altera o dinheiro atual
        lemonqtd++;

        // ALTERAÇÃO DO PREÇO
        lemonPrice = (lemonPrice*1.5);
        document.querySelector('#lemonPrice').innerHTML = lemonPrice.toFixed(2); // Altera o preço do limão

        // MENSAGEM DE SUCESSO
        console.log("Limão comprado")
    } else {
        console.log("Dinheiro insuficiente")
    }
}

// Começar o jogo
function start() {
    document.querySelector('#lemon').removeAttribute("onClick");
    ping();
    document.querySelector('#lemonPrice').innerHTML = lemonPrice.toFixed(2); // Altera o preço do limão
    document.querySelector('#lemon').setAttribute("onClick", "buyLemon()");
}

// Uma requisição por segundo

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function ping() {
    await sleep(1000); // Tempo necessário para cada atualização
    moneyMath(); // Faz a conta
    pong(); // Reinicia o ciclo
  }

  async function pong() {
    await sleep(1000); // Tempo necessário para cada atualização
    moneyMath(); // Faz a conta
    ping(); // Reinicia o ciclo
  }

//   Matemática do dinheiro

function moneyMath() {
    money = money + lemonqtd;
    document.querySelector('#money').innerHTML = money.toFixed(2); // Altera o dinheiro atual
}