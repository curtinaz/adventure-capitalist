let version = 1.5; // VERSÃO ATUAL

console.log(`Versão: ${version}`)
document.querySelector('#version').innerHTML = version;

// SaveState

if (typeof(Storage) !== "undefined") {
    // Sem problemas, seu progresso ficará salvo.
  } else {
  window.alert("Sinto muito, o seu progresso não ficará salvo.")
  }

// LoadState

if (localStorage.getItem("advCap_Save") !== null) {
  var money = localStorage.getItem("advCap_Save");
  var lemonqtd = localStorage.getItem("advCap_lemonqtd");

  money = Number(money) //contructor number
  lemonqtd = Number(lemonqtd) //contructor number

  document.querySelector('#money').innerHTML = money.toFixed(2);

  ping(); // INICIA O GAME
  saveGame(); // INICIA O SALVADOR DE PROGRESSO

} else {
  console.log("Um progesso anterior não foi encontrado")
  var lemonqtd = 1;
  var money = 1;
}

// GAME STARTS HERE



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
    document.querySelector('#lemonBox').removeAttribute("onClick");

    ping();
    document.querySelector('#lemonPrice').innerHTML = lemonPrice.toFixed(2); // Altera o preço do limão
    document.querySelector('#lemonBox').setAttribute("onClick", "buyLemon()");

    saveGame();
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

// Variáveis de saveGame 

  async function saveGame() {
    await sleep(10000); // salva o dinheiro de 10 em 10s
    localStorage.setItem("advCap_Save", money);
    localStorage.setItem("advCap_lemonqtd", lemonqtd);
    localStorage.setItem("advCap_lemonPrice", lemonPrice);
    saveGame();
    console.log("O progresso foi salvo")
  }
//   Matemática do dinheiro

function moneyMath() {
    money = money + lemonqtd;
    document.querySelector('#money').innerHTML = money.toFixed(2); // Altera o dinheiro atual
}