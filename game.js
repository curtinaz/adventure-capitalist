console.log("Versão: 1.0")

var money = 1;
var lemonqtd = 1;

// Comprar estabelecimento
function buyLemon() {
    if (money>=10) {
        money = money-10
        document.querySelector('#money').innerHTML = money;
        lemonqtd++;
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
    await sleep(1000);
    moneyMath();
    console.log("ping")
    pong();
  }

  async function pong() {
    await sleep(1000);
    moneyMath();
    console.log("pong")
    ping();
  }

//   Matemática do dinheiro

function moneyMath() {
    money = money + lemonqtd;
    document.querySelector('#money').innerHTML = money;
}