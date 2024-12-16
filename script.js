
function add(num1, num2){
    
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2){
    return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2){
    return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2){
    return parseInt(num1) / parseInt(num2);
}

let firstNumber = null;
let operator = '';
let secondNumber = null;


function operate(){

    if (operator == "+"){
        //add(firstNumber,secondNumber);
        let x = add(firstNumber,secondNumber).toString();
        console.log(`${firstNumber} ${operator} ${secondNumber} equals ${x}`)
        display.textContent = x;
        firstNumber = x;
        
    }
    if (operator == "-"){
        let x = subtract(firstNumber,secondNumber).toString();
        console.log(`${firstNumber} ${operator} ${secondNumber} equals ${x}`)
        display.textContent = x;
        firstNumber = x;
        
    }
    if (operator == "*"){
        let x = multiply(firstNumber,secondNumber).toString();
        console.log(`${firstNumber} ${operator} ${secondNumber} equals ${x}`)
        display.textContent = x;
        firstNumber = x;
    }
    if (operator == "÷"){
        let x = divide(firstNumber,secondNumber).toString();
        console.log(`${firstNumber} ${operator} ${secondNumber} equals ${x}`)
        display.textContent = x;
        firstNumber = x;
    }


}

const equalsButton = document.querySelector('.equals-btn');
const display = document.querySelector('.display');
const preview = document.querySelector('.preview');

const zeroButton = document.querySelector('.zero-btn');
const oneButton = document.querySelector('.one-btn');
const twoButton = document.querySelector('.two-btn');
const threeButton = document.querySelector('.three-btn');
const fourButton = document.querySelector('.four-btn');
const fiveButton = document.querySelector('.five-btn');
const sixButton = document.querySelector('.six-btn');
const sevenButton = document.querySelector('.seven-btn');
const eightButton = document.querySelector('.eight-btn');
const nineButton = document.querySelector('.nine-btn');

const addButton = document.querySelector('.add-btn');
const subtractButton = document.querySelector('.subtract-btn');
const multiplyButton = document.querySelector('.multiply-btn');
const divideButton = document.querySelector('.divide-btn');



let firstNumberSelection = true;
let operatorSelection = false;
let secondNumberSelection = false;
let displaySelection = false;

let firstSelection = true;
let secondSelection = true;

let withoutSecond = true;
let equalsReset = false;

equalsButton.addEventListener('click', () =>{
    if(firstNumberSelection){
        firstNumber = display.textContent;
        preview.textContent = firstNumber + " =";
        equalsReset = true;
        return
    }
    
    if(!displaySelection){
        secondNumber = display.textContent;
    }
    
    preview.textContent = `${firstNumber} ${operator} ${secondNumber} =`;
    secondNumberSelection = false;
    displaySelection = true;
    
    operate();
    console.log(`--------------------------------`)
    console.log(`first: ${firstNumberSelection}`)
    console.log(`operator: ${operatorSelection}`)
    console.log(`second: ${secondNumberSelection}`)
    console.log(`display: ${displaySelection}`)
    console.log(`--------------------------------`)
});


addButton.addEventListener('click', () =>{
    displaySelection = false;
    if(firstNumberSelection){ 
        firstNumber = display.textContent;
        firstNumberSelection = false;
        firstSelection = false;
        preview.textContent = firstNumber + " +" ;
    }

    if(secondNumberSelection){
        secondNumber = display.textContent;
        operate();
        
        preview.textContent = firstNumber + " +";
        secondNumberSelection = false;
    }
    if(display){
        preview.textContent = firstNumber + " +";
    }

    operator = "+";
    operatorSelection = true;
    console.log(operator)

    console.log(`--------------------------------`)
    console.log(`first: ${firstNumberSelection}`)
    console.log(`operator: ${operatorSelection}`)
    console.log(`second: ${secondNumberSelection}`)
    console.log(`display: ${displaySelection}`)
    console.log(`--------------------------------`)

});

subtractButton.addEventListener('click', () =>{
    displaySelection = false;
    if(firstNumberSelection){ 
        firstNumber = display.textContent;
        firstNumberSelection = false;
        firstSelection = false;
        preview.textContent = firstNumber + " -" ;
    }

    if(secondNumberSelection){
        secondNumber = display.textContent;
        operate();
        
        preview.textContent = firstNumber + " -";
        secondNumberSelection = false;
    }
    if(display){
        preview.textContent = firstNumber + " -";
    }

    operator = "-";
    operatorSelection = true;
    console.log(operator)

    console.log(`--------------------------------`)
    console.log(`first: ${firstNumberSelection}`)
    console.log(`operator: ${operatorSelection}`)
    console.log(`second: ${secondNumberSelection}`)
    console.log(`display: ${displaySelection}`)
    console.log(`--------------------------------`)

});
multiplyButton.addEventListener('click', () =>{
    displaySelection = false;
    if(firstNumberSelection){ 
        firstNumber = display.textContent;
        firstNumberSelection = false;
        firstSelection = false;
        preview.textContent = firstNumber + " *" ;
    }

    if(secondNumberSelection){
        secondNumber = display.textContent;
        operate();
        
        preview.textContent = firstNumber + " *";
        secondNumberSelection = false;
    }
    if(display){
        preview.textContent = firstNumber + " *";
    }

    operator = "*";
    operatorSelection = true;
    console.log(operator)

    console.log(`--------------------------------`)
    console.log(`first: ${firstNumberSelection}`)
    console.log(`operator: ${operatorSelection}`)
    console.log(`second: ${secondNumberSelection}`)
    console.log(`display: ${displaySelection}`)
    console.log(`--------------------------------`)

});
divideButton.addEventListener('click', () =>{
    displaySelection = false;
    if(firstNumberSelection){ 
        firstNumber = display.textContent;
        firstNumberSelection = false;
        firstSelection = false;
        preview.textContent = firstNumber + " ÷" ;
    }

    if(secondNumberSelection){
        secondNumber = display.textContent;
        operate();
        
        preview.textContent = firstNumber + " ÷";
        secondNumberSelection = false;
    }
    if(display){
        preview.textContent = firstNumber + " ÷";
    }

    operator = "÷";
    operatorSelection = true;
    console.log(operator)

    console.log(`--------------------------------`)
    console.log(`first: ${firstNumberSelection}`)
    console.log(`operator: ${operatorSelection}`)
    console.log(`second: ${secondNumberSelection}`)
    console.log(`display: ${displaySelection}`)
    console.log(`--------------------------------`)

});

zeroButton.addEventListener('click', () =>{
    displaySelection = false;
    if(operatorSelection){
        display.textContent = '';
    }
    
    if(firstNumberSelection == false && !secondNumberSelection){
        secondNumberSelection = true;
        display.textContent = '';
    }

    if(display.textContent == "0") display.textContent = '';

    if (!firstSelection){
        display.textContent = '';
        firstSelection = true;
    }
    if(!secondSelection){
        display.textContent = '';
        secondSelection = true;
    }

    operatorSelection = false;
    if(equalsReset){
        display.textContent = ''
        equalsReset = false;
    }
    display.textContent += 0;
    console.log(`--------------------------------`)
    console.log(`first: ${firstNumberSelection}`)
    console.log(`operator: ${operatorSelection}`)
    console.log(`second: ${secondNumberSelection}`)
    console.log(`display: ${displaySelection}`)
    console.log(`--------------------------------`)

});

oneButton.addEventListener('click', () =>{
    displaySelection = false;
    if(operatorSelection){
        display.textContent = '';
    }
    
    if(firstNumberSelection == false && !secondNumberSelection){
        secondNumberSelection = true;
        display.textContent = '';
    }

    if(display.textContent == "0") display.textContent = '';

    if (!firstSelection){
        display.textContent = '';
        firstSelection = true;
    }
    if(!secondSelection){
        display.textContent = '';
        secondSelection = true;
    }

    operatorSelection = false;
    if(equalsReset){
        display.textContent = ''
        equalsReset = false;
    }
    display.textContent += 1;
    console.log(`--------------------------------`)
    console.log(`first: ${firstNumberSelection}`)
    console.log(`operator: ${operatorSelection}`)
    console.log(`second: ${secondNumberSelection}`)
    console.log(`display: ${displaySelection}`)
    console.log(`--------------------------------`)

});
twoButton.addEventListener('click', () =>{
    displaySelection = false;
    if(operatorSelection){
        display.textContent = '';
    }
    
    if(firstNumberSelection == false && !secondNumberSelection){
        secondNumberSelection = true;
        display.textContent = '';
    }

    if(display.textContent == "0") display.textContent = '';

    if (!firstSelection){
        display.textContent = '';
        firstSelection = true;
    }
    if(!secondSelection){
        display.textContent = '';
        secondSelection = true;
    }

    operatorSelection = false;
    if(equalsReset){
        display.textContent = ''
        equalsReset = false;
    }
    display.textContent += 2;
    console.log(`--------------------------------`)
    console.log(`first: ${firstNumberSelection}`)
    console.log(`operator: ${operatorSelection}`)
    console.log(`second: ${secondNumberSelection}`)
    console.log(`display: ${displaySelection}`)
    console.log(`--------------------------------`)

});
threeButton.addEventListener('click', () =>{
    displaySelection = false;
    if(operatorSelection){
        display.textContent = '';
    }
    
    if(firstNumberSelection == false && !secondNumberSelection){
        secondNumberSelection = true;
        display.textContent = '';
    }

    if(display.textContent == "0") display.textContent = '';

    if (!firstSelection){
        display.textContent = '';
        firstSelection = true;
    }
    if(!secondSelection){
        display.textContent = '';
        secondSelection = true;
    }

    operatorSelection = false;
    if(equalsReset){
        display.textContent = ''
        equalsReset = false;
    }
    display.textContent += 3;
    console.log(`--------------------------------`)
    console.log(`first: ${firstNumberSelection}`)
    console.log(`operator: ${operatorSelection}`)
    console.log(`second: ${secondNumberSelection}`)
    console.log(`display: ${displaySelection}`)
    console.log(`--------------------------------`)

});
fourButton.addEventListener('click', () =>{
    displaySelection = false;
    if(operatorSelection){
        display.textContent = '';
    }
    
    if(firstNumberSelection == false && !secondNumberSelection){
        secondNumberSelection = true;
        display.textContent = '';
    }

    if(display.textContent == "0") display.textContent = '';

    if (!firstSelection){
        display.textContent = '';
        firstSelection = true;
    }
    if(!secondSelection){
        display.textContent = '';
        secondSelection = true;
    }

    operatorSelection = false;
    if(equalsReset){
        display.textContent = ''
        equalsReset = false;
    }
    display.textContent += 4;
    console.log(`--------------------------------`)
    console.log(`first: ${firstNumberSelection}`)
    console.log(`operator: ${operatorSelection}`)
    console.log(`second: ${secondNumberSelection}`)
    console.log(`display: ${displaySelection}`)
    console.log(`--------------------------------`)

});
fiveButton.addEventListener('click', () =>{
    displaySelection = false;
    if(operatorSelection){
        display.textContent = '';
    }
    
    if(firstNumberSelection == false && !secondNumberSelection){
        secondNumberSelection = true;
        display.textContent = '';
    }

    if(display.textContent == "0") display.textContent = '';

    if (!firstSelection){
        display.textContent = '';
        firstSelection = true;
    }
    if(!secondSelection){
        display.textContent = '';
        secondSelection = true;
    }

    operatorSelection = false;
    if(equalsReset){
        display.textContent = ''
        equalsReset = false;
    }
    display.textContent += 5;
    console.log(`--------------------------------`)
    console.log(`first: ${firstNumberSelection}`)
    console.log(`operator: ${operatorSelection}`)
    console.log(`second: ${secondNumberSelection}`)
    console.log(`display: ${displaySelection}`)
    console.log(`--------------------------------`)

});
sixButton.addEventListener('click', () =>{
    displaySelection = false;
    if(operatorSelection){
        display.textContent = '';
    }
    
    if(firstNumberSelection == false && !secondNumberSelection){
        secondNumberSelection = true;
        display.textContent = '';
    }

    if(display.textContent == "0") display.textContent = '';

    if (!firstSelection){
        display.textContent = '';
        firstSelection = true;
    }
    if(!secondSelection){
        display.textContent = '';
        secondSelection = true;
    }

    operatorSelection = false;
    if(equalsReset){
        display.textContent = ''
        equalsReset = false;
    }
    display.textContent += 6;
    console.log(`--------------------------------`)
    console.log(`first: ${firstNumberSelection}`)
    console.log(`operator: ${operatorSelection}`)
    console.log(`second: ${secondNumberSelection}`)
    console.log(`display: ${displaySelection}`)
    console.log(`--------------------------------`)

});
sevenButton.addEventListener('click', () =>{
    displaySelection = false;
    if(operatorSelection){
        display.textContent = '';
    }
    
    if(firstNumberSelection == false && !secondNumberSelection){
        secondNumberSelection = true;
        display.textContent = '';
    }

    if(display.textContent == "0") display.textContent = '';

    if (!firstSelection){
        display.textContent = '';
        firstSelection = true;
    }
    if(!secondSelection){
        display.textContent = '';
        secondSelection = true;
    }

    operatorSelection = false;
    if(equalsReset){
        display.textContent = ''
        equalsReset = false;
    }
    display.textContent += 7;
    console.log(`--------------------------------`)
    console.log(`first: ${firstNumberSelection}`)
    console.log(`operator: ${operatorSelection}`)
    console.log(`second: ${secondNumberSelection}`)
    console.log(`display: ${displaySelection}`)
    console.log(`--------------------------------`)

});
eightButton.addEventListener('click', () =>{
    displaySelection = false;
    if(operatorSelection){
        display.textContent = '';
    }
    
    if(firstNumberSelection == false && !secondNumberSelection){
        secondNumberSelection = true;
        display.textContent = '';
    }

    if(display.textContent == "0") display.textContent = '';

    if (!firstSelection){
        display.textContent = '';
        firstSelection = true;
    }
    if(!secondSelection){
        display.textContent = '';
        secondSelection = true;
    }

    operatorSelection = false;
    if(equalsReset){
        display.textContent = ''
        equalsReset = false;
    }
    display.textContent += 8;
    console.log(`--------------------------------`)
    console.log(`first: ${firstNumberSelection}`)
    console.log(`operator: ${operatorSelection}`)
    console.log(`second: ${secondNumberSelection}`)
    console.log(`display: ${displaySelection}`)
    console.log(`--------------------------------`)

});
nineButton.addEventListener('click', () =>{
    displaySelection = false;
    if(operatorSelection){
        display.textContent = '';
    }
    
    if(firstNumberSelection == false && !secondNumberSelection){
        secondNumberSelection = true;
        display.textContent = '';
    }

    if(display.textContent == "0") display.textContent = '';

    if (!firstSelection){
        display.textContent = '';
        firstSelection = true;
    }
    if(!secondSelection){
        display.textContent = '';
        secondSelection = true;
    }

    operatorSelection = false;
    if(equalsReset){
        display.textContent = ''
        equalsReset = false;
    }
    display.textContent += 9;
    console.log(`--------------------------------`)
    console.log(`first: ${firstNumberSelection}`)
    console.log(`operator: ${operatorSelection}`)
    console.log(`second: ${secondNumberSelection}`)
    console.log(`display: ${displaySelection}`)
    console.log(`--------------------------------`)

});


