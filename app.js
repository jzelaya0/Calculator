var display = document.getElementById('text-box');
var clearButton = document.getElementById('clear');
var numButtons = document.querySelectorAll('.number');
var operatorButtons = document.querySelectorAll('.operators');
var currentOperant;
var oldOperant;
var operator;

//GRABS ALL NUMBER BUTTONS
for (var i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', clickedNumbers);
}

//GRABS ALL OPERATOR BUTTONS
for (var i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click',clickedOperators);
}

//TOTALS BOTH OPERATORS
var result = document.getElementById('equals');
result.addEventListener('click', totalResult );


function totalResult(argument) {
  if(operator === '+'){
    console.log('Added Succesfully');
    display.value = add(oldOperant,currentOperant);
  }
  else if (operator === '-') {
  console.log('Subracted Succesfully');
  display.value = subtract(oldOperant,currentOperant);
  }
  else if (operator === 'x') {
  console.log('Multiplied Succesfully');
  display.value = multiply(oldOperant,currentOperant);
  }
  else if (operator === '/') {
  console.log('Divided Succesfully');
  display.value = divide(oldOperant,currentOperant);
  }
  else {
    display.value = 'ERROR';
  }
}



//DISPLAYS NUMBERS IN DISPLAY BOX
function clickedNumbers() {
  display.value = display.value + this.innerText;
  currentOperant = parseFloat(display.value);
  console.log(this.innerHTML);
}


//DISPLAYS OPERATORS IN DISPLAY BOX;
function clickedOperators(){
  display.value = "";
  operator = this.innerHTML;
  oldOperant = parseFloat(currentOperant);
  console.log(this.innerText);
}


//ADDITION EQUATION
function add(x, y) {
    return x + y;
}

//SUBTRACTION EQUATION
function subtract(x, y) {
  return x - y;
}

//SUBTRACTION EQUATION
function multiply(x, y) {
  return x * y;
}

//SUBTRACTION EQUATION
function divide(x, y) {
  return x / y;
}


//CLEARS THE BOX
clearButton.addEventListener('click', clearBox);
function clearBox() {
  console.log('clicked');
  currentOperant = '';
  display.value = '';
}
