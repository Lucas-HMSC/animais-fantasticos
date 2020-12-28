import Countdown from './countdown.js';

const timeTo2021 = new Countdown('31 December 2020 23:59:59');
const dias = document.querySelector('.dias');
const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');

setInterval(() => {
  dias.innerText = timeTo2021.total.days;
  horas.innerText = timeTo2021.total.hours;
  minutos.innerText = timeTo2021.total.minutes;
  segundos.innerText = timeTo2021.total.seconds;
}, 1000);