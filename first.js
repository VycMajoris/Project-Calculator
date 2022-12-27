let outmostContainer = document.getElementById('outmostContainer');
// text for buttons 
let buttonText = ["AC", "+/-", "%", "/",
                 "7", "8", "9" ,"X", "4",
                "5", "6", "-", "1","2",
                "3", "+", "0", ",", "=",];

let operatorsArr = ["C", "+/-", "%", "/", "x", "-", "+", "=", ",",];

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
    return num1+num2;
}

function substract (num1,num2) {
    return num1-num2;
}

function multiply (num1,num2) {
    return num1*num2;
}

function divide (num1,num2) {
    return num1/num2;
}
// deciding which function to use depending on the operator type
function operate (operator, num1, num2) {
    if(operator === '+') add(num1,num2)
    if(operator === '-') add(num1,num2)
    if(operator === 'x') add(num1,num2)
    if(operator === '/') add(num1,num2)

}
 



// select screenDiv
let screenDiv = document.getElementById('screenDiv');


 function displayFunc (e) {

    // TODO: If the pressed button is a number, add the button to whatever is on screen.
    //       Else, use the selected operator to calculate.
        let convertedNumber = Number(e.target.name);
        
        if(convertedNumber) && screenDiv.textContent) 
        screenDiv.textContent = e.target.name;
    
    
}












