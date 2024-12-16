
function add(num1, num2){
    
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2){
    return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

let firstNumber = null;
let operator = '';
let secondNumber = null;
let firstSelection = true;

let operatorSelection = false;


function operate(operator, firstNumber, secondNumber){

    if (operator == "+"){
        //add(firstNumber,secondNumber);
        display.textContent = add(firstNumber,secondNumber).toString();
    }
    if (operator == "-"){
        display.textContent = subtract(firstNumber,secondNumber).toString();
    }
    if (operator == "*"){
        multiply(firstNumber,secondNumber);
    }
    if (operator == "/"){
        divide(firstNumber,secondNumber);
    }


}

const equalsButton = document.querySelector('.equals-btn');
const sevenButton = document.querySelector('.seven-btn');
const display = document.querySelector('.display');
const addButton = document.querySelector('.add-btn');
const subtractButton = document.querySelector('.subtract-btn');


equalsButton.addEventListener('click', () =>{
    secondNumber = display.textContent;
    operate(operator, firstNumber, secondNumber);
});
sevenButton.addEventListener('click', () =>{
    operatorSelection = false;
    if(display.textContent == "0") display.textContent = '';

    if (!firstSelection){
        display.textContent = '';
        firstSelection = true;
    }
    display.textContent += 7;

});
addButton.addEventListener('click', () =>{
    
    if (operatorSelection) {
        operator = "+";
        console.log(operator)
        return;
    };
    if(operator != ''){
        const clickEvent = new Event('click');
        equalsButton.dispatchEvent(clickEvent);
    }

    firstNumber = display.textContent;
    firstSelection = false;
    operator = "+";
    operatorSelection = true;
    console.log(operator)

});

subtractButton.addEventListener('click', () =>{
    if(operatorSelection) {
        operator = "-";
        console.log(operator)
        return
    };

    
    if(operator != ''){
        console.log(operator);
        const clickEvent = new Event('click');
        equalsButton.dispatchEvent(clickEvent);
    }
    firstNumber = display.textContent;
    firstSelection = false;
    operator = "-";
    operatorSelection = true;
    console.log(operator)

    //
    

});


