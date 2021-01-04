let version = "1.9.1"; // VERSÃO ATUAL

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
  var lemonPrice = localStorage.getItem("advCap_lemonPrice");

  var appleqtd = localStorage.getItem("advCap_appleqtd");
  var applePrice = localStorage.getItem("advCap_applePrice");
  var appleRent = localStorage.getItem("advCap_appleRent");

  money = Number(money) //contructor number
  lemonqtd = Number(lemonqtd) //contructor number
  lemonPrice = Number(lemonPrice) //contructor number

  appleqtd = Number(appleqtd) //contructor number
  applePrice = Number(applePrice) //contructor number
  applePrice = Number(appleRent) //contructor number

  // Abaixo, todos os modificadores

  agro = localStorage.getItem("advCap_agro");
  agro = Number(agro);

  if (agro==0) {
    agro = 1;
  }

  if (agro==1.5) {
    document.querySelector("#agrotoxico").remove();
  }

  // =================== 

  lemon_dezena = localStorage.getItem("advCap_dezena");
  lemon_dezena = Number(lemon_dezena);

  if (lemon_dezena==0) {
    lemon_dezena = 1;
  }

  // Abaixo, todas as alterações no innerHTML que são necessárias quando um saveGame é encontrado

  document.querySelector('#money').innerHTML = money.toFixed(2);
  document.querySelector('#lemonBox').removeAttribute("onClick");
  document.querySelector('#lemonPrice').innerHTML = lemonPrice.toFixed(2); // Altera o preço do limão
  document.querySelector('#lemonBox').setAttribute("onClick", "buyLemon()");

  ping(); // INICIA O GAME
  saveGame(); // INICIA O SALVADOR DE PROGRESSO

} else { // OQUE ACONTECE QUANDO UM PROGRESSO NÃO É ENCONTRADO
  console.log("Um progesso anterior não foi encontrado")
  var lemonqtd = 1;
  var money = 1;
  var lemonPrice = 10;
  var applePrice = 250;
  var appleRent = 0;

  var agro = 1;
  var lemon_dezena = 1;
}

// GAME STARTS HERE


// Comprar estabelecimento
function buyLemon() {
    if (money>=lemonPrice) {
        money = money-lemonPrice;
        document.querySelector('#money').innerHTML = money.toFixed(2); // Altera o dinheiro atual
        lemonqtd++;
        kashing.play();

        // ALTERAÇÃO DO PREÇO
        lemonPrice = (lemonPrice*1.1);
        document.querySelector('#lemonPrice').innerHTML = lemonPrice.toFixed(2); // Altera o preço do limão

        // Quantidade de limões, dá um bônus para o jogador
        if (lemonqtd>=10) {
          lemon_dezena=1.1;
        }

        if (lemonqtd>=25) {
          lemon_dezena=1.25;
        }

        if (lemonqtd>=50) {
          lemon_dezena=1.5;
        }

        if (lemonqtd>=100) {
          lemon_dezena=2;
        }

        // MENSAGEM DE SUCESSO
        console.log("Limão comprado")
    } else {
        console.log("Dinheiro insuficiente")
    }
}

function buyApple() {
  if (money>=applePrice) {
      money = money-applePrice;
      document.querySelector('#money').innerHTML = money.toFixed(2); // Altera o dinheiro atual
      appleqtd++;
      kashing.play();

      // ALTERAÇÃO DO PREÇO
      applePrice = (applePrice*1.1);
      document.querySelector('#applePrice').innerHTML = applePrice.toFixed(2); // Altera o preço da maça

      // Quantidade de limões, dá um bônus para o jogador
      // if (lemonqtd>=10) {
      //   lemon_dezena=1.1;
      // }

      // if (lemonqtd>=25) {
      //   lemon_dezena=1.25;
      // }

      // if (lemonqtd>=50) {
      //   lemon_dezena=1.5;
      // }

      // if (lemonqtd>=100) {
      //   lemon_dezena=2;
      // }

      appleRent = appleqtd*25;

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

    localStorage.setItem("advCap_appleqtd", appleqtd);
    localStorage.setItem("advCap_applePrice", applePrice);
    localStorage.setItem("advCap_appleRent", appleRent);

    localStorage.setItem("advCap_agro", agro); // Valor do modificador agro
    localStorage.setItem("advCap_dezena", lemon_dezena); // Valor do modificador agro

    saveGame();
    console.log("O progresso foi salvo")
  }



// Modificadores de Rentabilidade

function agrotoxico() {
  if (money>=5000) {
    money = money-5000;
    agro = 1.5;
    document.querySelector("#agrotoxico").remove();
    console.log("Agro foi comprado");
  } else {
    console.log("Dinheiro Insuficiente");
  }
}

// Rentabilidade das coisas

var lemon_rent = lemonqtd*agro // Rentabilidade do Limão

//   Matemática do dinheiro

function moneyMath() {
    money = money + ((lemonqtd*agro)*lemon_dezena) + applerent;
    document.querySelector('#money').innerHTML = money.toFixed(2); // Altera o dinheiro atual
    document.querySelector('#moneypersecond').innerHTML = ((lemonqtd*agro)*lemon_dezena).toFixed(2); // Altera o dinheiro atual
}


// Sounds

let kashing = document.querySelector("#kashing")