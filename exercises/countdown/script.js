import Countdown from './countdown.js';

const timeTo2021 = new Countdown('31 December 2020 23:59:59');

setInterval(() => {
  console.log(timeTo2021.hours);
}, 1000);