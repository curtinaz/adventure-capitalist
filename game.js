var money = 1;
var lemonqtd = 1;

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
    var realMoney = document.querySelector("#money").innerHTML;
    money = money + lemonqtd;
    realMoney = money;
}