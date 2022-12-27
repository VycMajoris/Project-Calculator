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

function percent (num) {
    return num/100;
}

function changeSign (num) {
    return -num;
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

let currentCalcResult = 0;

 function displayFunc (e) {

    // TODO: If the pressed button is a number, add the button to whatever is on screen.
    //       Else, use the selected operator to calculate.
        let leftNum = 0;
        let rightNum = 0;
        let convertedNumber = Number(e.target.name);
        // check if the pressed button is a number
        if(Number.isFinite(convertedNumber)) {
            screenDiv.textContent += convertedNumber;
            
            
        } else if(operatorsArr.includes(e.target.name)) {
            leftNum = Number(screenDiv.textContent);
            //screenDiv.textContent = '';
            screenDiv.textContent = leftNum+ ' ' + e.target.name + ' ';
            // console.log(screenDiv.textContent);
            rightNum = Number(screenDiv.textContent.substring((screenDiv.textContent.indexOf('+')) + 2));
            console.log(leftNum, rightNum);
            screenDiv.textContent = add(leftNum, rightNum); 
            
        }
       
    
    
}












