let inpt = {};
let last = "5%";
function loadInit() {
  for (let i of [...document.querySelectorAll("input[type=button]")]) {
    inpt[i.value] = false;
  }
  inpt["5%"] = true;
  last = "5%";
  setStyle();
}

loadInit();

let pers = 0;
let sum = 0;

function getSum(ev) {
  sum = document.getElementById(ev).value;
  checkout();
  //   console.log("SUM: ", sum);
}

function getPers(ev) {
  pers = document.getElementById(ev).value;
  checkout();
  //   console.log("PERS: ", pers);
}

function checkout() {
  if (sum && pers && parseInt(last.split("%")[0])) {
    console.log("Tip ammount", sum / parseInt(last.split("%")[0]) / pers);
    console.log(
      "Total ammount",
      (sum / parseInt(last.split("%")[0]) / pers) * pers
    );
  }
}

function test() {
  let sum2 = 142.55,
    proc2 = 15,
    pers2 = 5;
  console.log("TIP:", (100 * proc2) / sum2);
  console.log("Tip ammount", sum2 / proc2 / pers2);
  console.log("Total ammount", (sum2 / proc2 / pers2) * pers2);
}
test();
test();
test();

function setStyle() {
  for (let i in inpt) {
    let a = document.querySelector(`input[value='${i}']`);
    a.style.backgroundColor = inpt[i] ? "rgb(38, 192, 171)" : "rgb(0, 73, 77)";
  }
}

function selectedTip(ev) {
  inpt[last] = false;
  inpt[ev.value] = true;
  last = ev.value;
  setStyle();
}
