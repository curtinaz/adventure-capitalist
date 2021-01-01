// Uma requisição por segundo

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function ping() {
    await sleep(1000);
    moneyMath();
  }

  async function pong() {
    await sleep(1000);
    moneyMath();
  }

//   Matemática do dinheiro

function moneyMath() {
    money = money + lemonqtd;
}