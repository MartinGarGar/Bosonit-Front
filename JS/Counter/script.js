let startNumber;

let operation = 'sum';

let counter = document.getElementById('counter');
let counterNumber = document.getElementById('startNumber');
let step = document.getElementById('step');

let interval;

let result 

result = getStartNumber();

const start = () => {
  interval = setInterval(function timer() {
    if (operation === 'sum') {
      let stepLength = getStep();

      result += stepLength;

      counter.innerHTML = result;
    } else if (operation === 'rest') {
      let step = getStep();

      result -= step;

      counter.innerHTML = result;
    } return result
  }, 1000);
}

function getStartNumber() {
  startNumber = parseInt(counterNumber.value);

  return startNumber;
}

const getStep = ()=> {
  let stepLength = parseInt(step.value);

  return stepLength;
}

const pause = () => {
  clearInterval(interval);
}

const reset = () => {
  counter.innerHTML = parseInt(counterNumber.value)
}

const sum = () => {
  operation = 'sum';

  return operation;
}

const rest = () => {
  operation = 'rest';

  return operation;
}
