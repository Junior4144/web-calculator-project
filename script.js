
function add(num1, num2){
    const output = parseInt(num1) + parseInt(num2);;

    return Math.round(output * 100) / 100;
}

function subtract(num1, num2){
    return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2){
    return parseInt(num1) * parseInt(num2);
}


function divide(num1, num2){
    const output = parseInt(num1) / parseInt(num2);
    if (num1 == 0){
        return "boy what the hell"
    }
    return Math.round(output*100)/100;
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

const clearButton = document.querySelector('.clear-btn');
const delButton = document.querySelector('.del-btn');
const resetButton = document.querySelector('.reset-btn');
const interchangeButton = document.querySelector('.interChange-btn');
const decimalPointButton = document.querySelector('.decimal-btn');

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
let lengthLimit = false;

clearButton.addEventListener('click', () => {
    //clears display
    display.textContent = '0';
});
resetButton.addEventListener('click', () => {
    //resets display/ preview / all variables as if it was new
    display.textContent = '0';
    operator = '';
    firstNumber = null;
    secondNumber = null;
    preview.textContent = '';
    firstNumberSelection = true;
    operatorSelection = false;
    secondNumberSelection = false;
    displaySelection = false;
    firstSelection = true;
    secondSelection = true;
    withoutSecond = true;
    equalsReset = false;
    lengthLimit = false;

});
delButton.addEventListener('click', () => {
    //remove one number from display
    let x = display.textContent;
    display.textContent = x.substring(0, x.length-1);
    if(display.textContent == ''){
        display.textContent = "0"
    }
});
interchangeButton.addEventListener('click', () => {
    //remove one number from display
    let x = display.textContent;
    if (x.charAt(0) != '-'){
        //add a negative symbol to the front of text
        display.textContent = `-${display.textContent}`;
    }
    else{
        //removes a the negative symbol in front of text
        display.textContent = x.substring(1);
    }
});
decimalPointButton.addEventListener('click', () =>{
    //adds a decimal point
    let x = display.textContent;

    if (!x.includes('.')){
        display.textContent = `${x}.`
    }
});


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
    if(lengthLimit){
        return
    }
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
    if(lengthLimit){
        return
    }
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
    if(lengthLimit){
        return
    }
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
    if(lengthLimit){
        return
    }
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
    if(lengthLimit){
        return
    }
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
    if(lengthLimit){
        return
    }
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
    if(lengthLimit){
        return
    }
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
    if(lengthLimit){
        return
    }
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
    if(lengthLimit){
        return
    }
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


const allBtn = document.querySelectorAll('button');

allBtn.forEach((current) =>{
    current.addEventListener('click', () =>{
        console.log(display.textContent.length)
        if (display.textContent.length > 10){
            lengthLimit = true;
            
        }
        else{
            lengthLimit = false;
        }
    })
    current.addEventListener('mousedown', () =>{
        current.style.backgroundColor = "grey";
    });
    current.addEventListener('mouseup', () =>{
        current.style.backgroundColor = "lightgrey";
    });

});


document.addEventListener('keydown', ({key}) =>{
    const event = new Event('click');
    if(key == '/'){
        divideButton.dispatchEvent(event)
    }
    if(key == 'Backspace' || key == 'Delete'){
        delButton.dispatchEvent(event)
    }
    if(key == '+'){
        addButton.dispatchEvent(event)
    }
    if(key == '-'){
        subtractButton.dispatchEvent(event)
    }
    if(key == '*'){
        multiplyButton.dispatchEvent(event)
    }
    if(key == '.'){
        decimalPointButton.dispatchEvent(event)
    }
    if(key == '0'){
        zeroButton.dispatchEvent(event)
    }
    if(key == '1'){
        oneButton.dispatchEvent(event)
    }
    if(key == '2'){
        twoButton.dispatchEvent(event)
    }
    if(key == '3'){
        threeButton.dispatchEvent(event)
    }
    if(key == '4'){
        fourButton.dispatchEvent(event)
    }
    if(key == '5'){
        fiveButton.dispatchEvent(event)
    }
    if(key == '6'){
        sixButton.dispatchEvent(event)
    }
    if(key == '7'){
        sevenButton.dispatchEvent(event)
    }
    if(key == '8'){
        eightButton.dispatchEvent(event)
    }
    if(key == '9'){
        nineButton.dispatchEvent(event)
    }

});