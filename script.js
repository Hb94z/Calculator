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

function multiplyarray(array2) {

  return array2.reduce((a, b)=> a*b)
};

function operate(firstNum, secondNum, operatorChoice) {
 let firstNumToNumber = parseInt(firstNum);
 let secondNumToNumber = parseInt(secondNum);
 if (operatorChoice === "+") {
   let answer = add(firstNumToNumber, secondNumToNumber);
   console.log(answer);
   displayArea.innerHTML = answer;
    return answer
} if (operatorChoice === "-") {
    answer = subtract(firstNumToNumber, secondNumToNumber);
    console.log(answer);
    displayArea.innerHTML = answer;
    return answer;
  } else if (operatorChoice === "/") {
    answer = divide(firstNumToNumber, secondNumToNumber);
    console.log(answer);
    displayArea.innerHTML = answer;
    return answer;
  } else if (operatorChoice === "*") {
    answer = multiply(firstNumToNumber, secondNumToNumber);
    console.log(answer);
    displayArea.innerHTML = answer;
    return answer;
  }
  
};
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
    currentValue = e.target.innerHTML;
    previousValue = displayArea.innerHTML;
    displayValue = previousValue + currentValue;
    displayArea.innerHTML = displayValue
  }

  

let operateButtons = document.querySelectorAll(".operator");
operateButtons.forEach(button => {
  button.addEventListener("click", (e) => {
   
    startCalculation(e);
   
    
  })
});

let startCalculation = (e) => {
firstNum = displayArea.innerHTML;
operatorChoice = e.target.innerHTML;
console.log(firstNum);
console.log(operatorChoice);
displayArea.innerHTML = "";


};

let equalButton = document.querySelectorAll(".equal");
equalButton.forEach(button => {
  button.addEventListener("click", (e) => {
   
    calculate(e);
    
  })
});

let calculate = (e) => {
  secondNum = displayValue;
  console.log(firstNum, operatorChoice, secondNum);
  operate(firstNum, secondNum, operatorChoice);
}


let clearButton = document.querySelectorAll(".reset");
clearButton.forEach(button => {
  button.addEventListener("click", (e) => {
  
    resetAll(e)
    
  })
});
function resetAll(e) {
  let firstNum = "";
  let secondNum = "";
  let operatorChoice = "";
  let currentValue = "";
  let previousValue = "";
  let displayValue = "";
  console.log(displayValue, firstNum, secondNum,operatorChoice, currentValue, previousValue)
};

