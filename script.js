const countDate = new Date("jan 1, 2023 00:00:00").getTime();

function newYear() {
  let now = new Date().getTime();
  let gap = countDate - now;
  let segundos = 1000;
  let minutos = segundos * 60;
  let horas = minutos * 60;
  let dias = horas * 24;
  let d = Math.floor(gap / (dias));
  let h = Math.floor((gap % (dias)) / (horas));
  let m = Math.floor((gap % (horas)) / (minutos));
  let s = Math.floor((gap % (minutos)) / (segundos));
  document.getElementById("dias").innerText = d;
  document.getElementById("horas").innerText = h;
  document.getElementById("minutos").innerText = m;
  document.getElementById("segundos").innerText = s;
};
setInterval(() => newYear(), 1000);
