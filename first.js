let outmostContainer = document.getElementById('outmostContainer');

// text for buttons 
let buttonText = ["AC", "+/-", "%", "/",
                 "7", "8", "9" ,"x", "4",
                "5", "6", "-", "1","2",
                "3", "+", "0", ",", "=",];

 let numButtonsArr = ["0", "1", "2", "3" , "4",
                    "5", "6", "7", "8" , "9"];                

let operatorsArr = ["+/-", "%", "/", "x", "-", "+", "="];

let operators = "+/-%x";

// create buttons for numbers
for (let i=1; i<=19; i++) {
    let createBtn = document.createElement('button');
    let createNumBtn = document.createElement('button');
    let clearButton = document.createElement('button');
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
    
    
    console.log("add func here num1: " + num1);
    console.log("add func here num2: " + num2);
    screenDiv.textContent = result;
    //num1 = currentNum;
    num2= '';
    
    return result;
}

function subtract (number1,number2) {
    let result = number1 - Number(number2);
    
    currentNum = Number(result);
    console.log('result: ' + result);    
    console.log("add func here num1: " + num1);
    console.log("add func here num2: " + num2);
    screenDiv.textContent = result;
    //num1 = currentNum;
    num2= '';
    
    return result;
}

function multiply (num1,num2) {
    screenDiv.textContent = num1 * num2;
}

function divide (num1,num2) {
    screenDiv.textContent = num1 / num2;
}

function percent (num1) {
    screenDiv.textContent = num1 / 100;
}

function changeSign (num1) {
    screenDiv.textContent = -num1;
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
    let result = 0;
    currentOperator = e.target.name;
    e.target.style.backgroundColor = 'white';

    
    
    if (currentOperator === '+') {
        add(num1, num2);
        
    }
    
    if (currentOperator === '-') {
        subtract(num1, num2);
        
    }

    
    
    
    
    num1 = currentNum;
    
    console.log("operator is " + currentOperator);
    console.log("displayFunc here num1: " + num1);
    console.log("displayFunc here num2: " + num2);





    /* if(!(operatorsArr.some( value => e.target.name.includes(value)))) {
        screenDiv.textContent += e.target.name;
        num1 += e.target.name;
    }
    

    if(operatorsArr.some( value => e.target.name.includes(value))) {
        if(screenDiv.textContent === '') {
        screenDiv.textContent = '';
    }
        //operator secildiginde ekran bos degilse ve ekranda bir operator varsa:   
        if (screenDiv.textContent !== '' && operatorsArr.some( value => screenDiv.textContent.includes(value))){
    
        //num1 = e.target.name;
        screenDiv.textContent += e.target.name;
        }
  
} 


console.log(num1) */
     
    
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


    

   
   
   console.log('num1: ' + num1);
   console.log('num2: ' + num2);
}

function clearButtonFunc () {
    console.log("clear button event function called");
}
    



   
        
        

            
            
            
            
        

  


       
    
    













