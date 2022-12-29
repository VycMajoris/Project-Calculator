let outmostContainer = document.getElementById('outmostContainer');

// text for buttons 
let buttonText = ["AC", "+/-", "%", "/",
                 "7", "8", "9" ,"x", "4",
                "5", "6", "-", "1","2",
                "3", "+", "0", ",", "=",];

 let numButtonsArr = ["0", "1", "2", "3" , "4",
                    "5", "6", "7", "8" , "9"];                

let operatorsArr = ["+/-", "%", "/", "x", "-", "+", "="];

// create buttons for numbers
for (let i=1; i<=19; i++) {
    let createBtn = document.createElement('button');
    let createNumBtn = document.createElement('button');
    let clearButton = document.createElement('button');
    let equalButton = document.createElement('button');
    // name every button same as its text content
    createBtn.name = buttonText[i-1];
    createBtn.id = 'buttons';
    createBtn.textContent= buttonText[i-1];
    createBtn.style.width= '65px';
    createBtn.style.height = '65px';
    outmostContainer.appendChild(createBtn);
    createBtn.style.backgroundColor = 'yellow';
    // add event listeners for each button
    if ((operatorsArr.some(value => createBtn.name.includes(value)))) {
        createBtn.addEventListener ('click', displayFunc);
    }
     if (createBtn.textContent === '0') {
        createBtn.style.width = '130px';
    } 
    if((numButtonsArr.some(value => createBtn.name.includes(value)))) {
        createNumBtn = createBtn;
        createNumBtn.addEventListener('click', numEventFunc);
    }   
    if(createBtn.name === 'AC') {
        clearButton = createBtn;
        clearButton.addEventListener('click', clearButtonFunc);
    }
    if(createBtn.name === '=') {
        equalButton = createBtn;
        equalButton.addEventListener('click', equalButtonFunc);
    }
}

let currentNum;
let num1 = '';
let num2 = '';
let currentOperator;
console.log("operator changed to: " +currentOperator);

function add (number1,number2) {
    // screenDiv.textContent = num1 + num2;
    
    let result = number1 + number2;
    currentNum = Number(result);
    console.log('result: ' + result);
    screenDiv.textContent = result;
    num1 = currentNum;
    num2= '';    
    return result;
}
function subtract (number1,number2) {
    let result = number1 - number2;
    currentNum = Number(result);
    console.log('result: ' + result);
    screenDiv.textContent = result;
    num1 = currentNum;
    num2= '';    
    return result;
}
function multiply (number1,number2) {
    let result = number1 * number2;
    if (number2 === '') multiply (number1,number2);
    currentNum = Number(result);
    console.log('result: ' + result);
    screenDiv.textContent = result;
    num1 = currentNum;
    num2= '';    
    return result;
}
function divide (number1,number2) {
    let result = number1 / number2;
    currentNum = Number(result);
    console.log('result: ' + result);
    screenDiv.textContent = result;
    num1 = currentNum;
    num2= '';    
    return result;
}
function percent (number1) {
    let result = number1 / 100;
    currentNum = Number(result);
    console.log('result: ' + result);
    screenDiv.textContent = result;
    num1 = currentNum;
    num2= '';    
    return result;
}
 function changeSign (number1) {
    let result = number1 * -1;
    currentNum = -1 * Number(result);
    console.log('result: ' + result);
    screenDiv.textContent = result;
    num1 = currentNum;
    num2= '';    
    return result;  
} 


// deciding which function to use depending on the operator type
function operate (operator, num1, num2) {
    if(operator === '+') add(num1,num2)
    if(operator === '-') subtract(num1,num2)
    if(operator === 'x') multiply(num1,num2)
    if(operator === '/') divide(num1,num2)

}

// select screenDiv
let screenDiv = document.getElementById('screenDiv');

 function displayFunc (e) {

    e.target.style.backgroundColor = 'white';    
    if (currentOperator === '+') add(num1, num2);    
    if (currentOperator === '-') subtract(num1, num2);
    if (currentOperator === 'x') multiply(num1, num2);
    if (currentOperator === '/') divide(num1, num2);
    if (currentOperator === '%') percent(num1);
    if (currentOperator === '+/-') changeSign(num1);
    if (currentOperator === 'AC') changeSign(num1);
    currentOperator = e.target.name;
}

function numEventFunc (e) {

    if(currentOperator == undefined) {
        screenDiv.textContent += e.target.name;
        num1 = Number(screenDiv.textContent);
    } else {
        if(num2 === '') screenDiv.textContent = '';        
        screenDiv.textContent += e.target.name;        
        num2= Number(screenDiv.textContent);
    }
}
function clearButtonFunc () {
    num1 = '';
    num2 = '';
    currentOperator = '';
    screenDiv.textContent = '';
}

function equalButtonFunc () {
    displayFunc(); 
}
    

// TODO: Pressing an operator twice makes result 0.



   
        
        

            
            
            
            
        

  


       
    
    













