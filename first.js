let outmostContainer = document.getElementById('outmostContainer');

let buttonText = ["AC", "+/-", "%", "/",
                 "7", "8", "9" ,"X", "4",
                "5", "6", "-", "1","2",
                "3", "+", "0", ",", "=",];


for (let i=1; i<=19; i++) {
    let createBtn = document.createElement('button');
    createBtn.id = 'buttons';
    createBtn.textContent= buttonText[i-1];
    createBtn.style.width= '65px';
    createBtn.style.height = '65px';
    outmostContainer.appendChild(createBtn);
    createBtn.style.backgroundColor = 'yellow';

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

function operate (operator, num1, num2) {
    if(operator === '+') add(num1,num2)
    if(operator === '-') add(num1,num2)
    if(operator === 'x') add(num1,num2)
    if(operator === '/') add(num1,num2)

}














