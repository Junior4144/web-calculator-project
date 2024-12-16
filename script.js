
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
        display.textContent = x;
        firstNumber = x;
        console.log(`${firstNumber} ${operator} ${secondNumber} equals ${x}`)
        
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
const preview = document.querySelector('.preview');

let firstNumberSelection = true;
let operatorSelection = false;
let secondNumberSelection = false;
let displaySelection = false;

let firstSelection = true;
let secondSelection = true;

let withoutSecond = true;
let equalsReset = false;

equalsButton.addEventListener('click', () =>{
    //two version with operationSelection
    if(firstNumberSelection){
        firstNumber = display.textContent;
        preview.textContent = firstNumber + " =";

        equalsReset = true;
        return
    }
    
    if(!displaySelection){
        secondNumber = display.textContent;
    }
    
    
    preview.textContent = firstNumber + " + "  + secondNumber + " =";
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
addButton.addEventListener('click', () =>{
    displaySelection = false;
    //firstNum = null
    if(firstNumberSelection){ // if firstNumberSelection is true -> 
        firstNumber = display.textContent;
        firstNumberSelection = false;
        firstSelection = false;
        preview.textContent = firstNumber + " +" ;
    }

    if(secondNumberSelection){ // if secondNumberSelection is true -> 77 + 77 +
        secondNumber = display.textContent;
        console.log("hello");
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
    if(firstNumberSelection){ // if firstNumberSelection is true -> 
        firstNumber = display.textContent;
        firstNumberSelection = false;
        firstSelection = false;
    }
    if(secondNumberSelection){ // if secondNumberSelection is true -> 
        secondNumber = display.textContent;
    }
    
    if(operator != '' && !operatorSelection ){
        console.log(operator);
        const clickEvent = new Event('click');
        equalsButton.dispatchEvent(clickEvent);
    }
    operator = "-";
    operatorSelection = true;
    console.log(operator)

});


