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
   answer = add(firstNumToNumber, secondNumToNumber);
   console.log(answer);
   displayArea.innerHTML = answer;
   

} if (operatorChoice === "-") {
    answer = subtract(firstNumToNumber, secondNumToNumber);
    console.log(answer);
    displayValue.innerHTML = answer;

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
   
    ;
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

    clear(e);
  })
});

function clear (e) {
  let firstNum = "";
  let secondNum = "";
  let operatorChoice = "";
  let currentValue = "";
  let previousValue = "";
  let displayValue = "";
  displayArea.innerHTML = "";
  console.log(displayValue, firstNum, secondNum,operatorChoice, currentValue, previousValue)
  return displayValue, firstNum, secondNum, operatorChoice, currentValue, previousValue
}





//fix bug after equals is pressed which just adds directly to displaynumber
//add chain calculating after am operator is prssed display running total instead of having to press equal every time before next operation
//fix css layout
//prevent divide by 0
//do something for decimals

//solution: add event listern after equals is presed. if number is presed, clear all. 