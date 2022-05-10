let startNumber;

let operation = 'sum';

let counter = document.getElementById('counter');
let counterNumber = document.getElementById('startNumber');
let step = document.getElementById('step');

let interval;

let result 

result = getStartNumber();

function start() {
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

function getStep() {
  let stepLength = parseInt(step.value);

  return stepLength;
}

function pause() {
  clearInterval(interval);
}

function reset() {
  counter.innerHTML = parseInt(counterNumber.value)
}

function sum() {
  operation = 'sum';

  return operation;
}

function rest() {
  operation = 'rest';

  return operation;
}
