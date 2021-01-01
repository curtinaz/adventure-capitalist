var money = 1;
var lemonqtd = 0;

// Comprar estabelecimento

// Começar o jogo
function start() {
    document.querySelector('#lemon').removeAttribute("onClick");
    document.querySelector('#lemon').setAttribute("onClick", "buyLemon");
    ping();
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