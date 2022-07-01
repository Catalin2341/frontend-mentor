let inpt = {};
let last = "5%";
let pers = 0;
let sum = 0;
function loadInit() {
  for (let i of [...document.querySelectorAll("input[type=button]")]) {
    inpt[i.value] = false;
  }
  inpt["5%"] = true;
  last = "5%";
  if (sum && pers) {
    sum = 0.0;
    pers = 0.0;
    document.querySelector("#sum").value = "";
    document.querySelector("#pers").value = "";
    document.getElementById("total_tip").innerText = "$" + "0.00";
    document.getElementById("total_sum").innerText = "$" + "0.00";
    checkout();
  }
  setStyle();
}

loadInit();

function getSum(ev) {
  sum = parseFloat(document.getElementById(ev).value);
  checkout();
}

function getPers(ev) {
  pers = parseInt(document.getElementById(ev).value);
  checkout();
  //   console.log("PERS: ", pers);
}

function checkout() {
  if (sum && pers && parseInt(last.split("%")[0])) {
    let proc = parseInt(last.split("%")[0]);
    proc = proc / 100;
    let tip = formatToFixed(sum * proc);
    let total_tip = formatToFixed(parseFloat(tip / pers));
    let total_pers = formatToFixed(parseFloat((sum + tip) / pers));
    document.getElementById("total_tip").innerText = "$" + total_tip;
    document.getElementById("total_sum").innerText = "$" + total_pers;
  }
}

function formatToFixed(par) {
  // console.log("NUM:", num);
  let num = par.toString();
  if (num.includes(".")) {
    let ans = "";
    num = num.split(".");
    ans += num[0] + "." + num[1].slice(0, 2);
    ans = parseFloat(ans);
    return ans;
  }
  num = parseFloat(num);
  return num;
}

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
  if (sum && pers) {
    checkout();
  }
  setStyle();
}
