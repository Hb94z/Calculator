function add(x, y) {
	  return x + y
};

function subtract(x, y) {
	  return x - y
};

function multiply(x, y) {
    return x * y
};

function divide(x, y) {
    return x / y
};

function operate(firstNum, secondNum, operatorChoice) {
   let firstNumToNumber = parseInt(firstNum);
   let secondNumToNumber = parseInt(secondNum);
 
   if (operatorChoice === "+") {
     answer = add(firstNumToNumber, secondNumToNumber);
     console.log(answer);
     displayArea.innerHTML = answer;

   } else if (operatorChoice === "-") {
      answer = subtract(firstNumToNumber, secondNumToNumber);
      console.log(answer);
      displayArea.innerHTML = answer;

   } else if (operatorChoice === "/") {
      answer = divide(firstNumToNumber, secondNumToNumber);
      console.log(answer);
      displayArea.innerHTML = answer;

   } else if (operatorChoice === "*") {
      answer = multiply(firstNumToNumber, secondNumToNumber);
      console.log(answer);
      displayArea.innerHTML = answer;
   }
  
};

  let answer = "";
  let firstNum = "";
  let secondNum = "";
  let operatorChoice = "";
  let currentValue = "";
  let previousValue = "";
  let displayValue = "";
  let displayArea = document.getElementById("display");
  displayArea.innerHTML += displayValue;
 
  let buttons = document.querySelectorAll(".numbers");
  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
     
    
      updateDisplay(e);
    })
  });

  let updateDisplay = (e) => {
      if(displayArea.innerHTML == answer) displayArea.innerHTML = ""
      currentValue = e.target.innerHTML;
      if (e.target.innerHTML == "?") {
        currentValue = Math.floor(Math.random() * 10);
      }
      previousValue = displayArea.innerHTML;
      displayValue = previousValue + currentValue;
      displayArea.innerHTML = displayValue
  }

let operateButtons = document.querySelectorAll(".operator");
operateButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    if(firstNum !== "") {
      
      prepareCalculationData(e);
    }
    
    getFirstNum(e);
  })
});

let getFirstNum = (e) => {
  firstNum = displayArea.innerHTML;
  operatorChoice = e.target.innerHTML;
  console.log(firstNum);
  console.log(operatorChoice);

//if multiple calculations are being done without = being pressed, will make sure to populate the display with the current running answer
  displayArea.innerHTML = answer;
};

let equalButton = document.querySelectorAll("#equal");
equalButton.forEach(button => {
  button.addEventListener("click", (e) => {
   
    
    prepareCalculationData(e);
  })
});

let prepareCalculationData = (e) => {
  secondNum = displayValue;
  console.log(firstNum, operatorChoice, secondNum);
  operate(firstNum, secondNum, operatorChoice);

}

let clearButton = document.querySelectorAll("#reset");
clearButton.forEach(button => {
  button.addEventListener("click", (e) => {

    clear(e);
  })
});

function clear () {
  answer = "";
  firstNum = "";
  secondNum = "";
  operatorChoice = "";
  currentValue = "";
  previousValue = "";
  displayValue = "";
  displayArea.innerHTML = "";
  console.log(displayValue, firstNum, secondNum,operatorChoice, currentValue, previousValue)
  return displayValue, firstNum, secondNum, operatorChoice, currentValue, previousValue
}