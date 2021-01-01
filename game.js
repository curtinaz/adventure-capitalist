console.log("Versão: 1.0")

var money = 1;
var lemonqtd = 1;

// Preços

lemonPrice = 10;

// Comprar estabelecimento
function buyLemon() {
    if (money>=10) {
        money = money-10
        document.querySelector('#money').innerHTML = money;
        lemonqtd++;

        // ALTERAÇÃO DO PREÇO
        lemonPrice = lemonPrice * 1,1;
        document.querySelector('#lemonPrice').innerHTML = lemonPrice;

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
    document.querySelector('#money').innerHTML = money;
}