let outmostContainer = document.getElementById('outmostContainer');
// text for buttons 
let buttonText = ["AC", "+/-", "%", "/",
                 "7", "8", "9" ,"x", "4",
                "5", "6", "-", "1","2",
                "3", "+", "0", ",", "=",];

let operatorsArr = ["+/-", "%", "/", "x", "-", "+",];

// create buttons for calculator
for (let i=1; i<=19; i++) {
    let createBtn = document.createElement('button');
    // name every button same as its text content
    createBtn.name = buttonText[i-1];
    createBtn.id = 'buttons';
    createBtn.textContent= buttonText[i-1];
    createBtn.style.width= '65px';
    createBtn.style.height = '65px';
    outmostContainer.appendChild(createBtn);
    createBtn.style.backgroundColor = 'yellow';
    // add event listeners for each button
    createBtn.addEventListener ('click', displayFunc);
     if (createBtn.textContent === '0') {
        createBtn.style.width = '130px';
    }     
}

function add (num1,num2) {
    screenDiv.textContent = num1+ num2;
    console.log('add: ' + (num1+ num2));
}

function substract (num1,num2) {
    screenDiv.textContent = num1 - num2;
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
    if(operator === '-') substract(num1,num2)
    if(operator === 'x') multiply(num1,num2)
    if(operator === '/') divide(num1,num2)

}
 



// select screenDiv
let screenDiv = document.getElementById('screenDiv');

 function displayFunc (e) {

   
        
        

            
            
            
            
        }

  


       
    
    













