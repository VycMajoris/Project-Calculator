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
    if (createBtn.textContent === '=') {
        createBtn.addEventListener('click', equalButton);
    }


}

let currentValue = 0;    

function add (num1,num2) {
    //screenDiv.textContent = (num1 + num2);
    let added = num1 + num2;
    if(!isNaN(added)) {
        currentValue = added;
        screenDiv.textContent = currentValue;
    }
    
    /* if(result === NaN) console.log(num2);
    else console.log(result); */
    //console.log('add: ' + num1);
}

function subtract (num1,num2) {
    //screenDiv.textContent = num1 - num2;
    let result = num1 - num2;
    if(!isNaN(result)) screenDiv.textContent = result;
}

function multiply (num1,num2) {
    let result = num1 * num2;
    if(!isNaN(result)) screenDiv.textContent = result;
}

function divide (num1,num2) {
    let result = num1 / num2;
    if(!isNaN(result)) screenDiv.textContent = result;
}

function percent (num1) {
    let result = num1 / 100;
    if(!isNaN(result)) screenDiv.textContent = result;
}

function changeSign (num1) {
    let result = -num1;
    if(!isNaN(result)) screenDiv.textContent = result;
}

function equalButton (result) {
    //screenDiv.textContent = num1 - num2;
    console.log('sdf');
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

   
        
        let convertedNumber = Number(e.target.name);

        if(e.target.name !== '=') {
            if (!(operatorsArr.some(char => screenDiv.textContent.includes(char)))){
                screenDiv.textContent += e.target.name; 
            }
                else if((operatorsArr.some(char => screenDiv.textContent.includes(char))) && ((operatorsArr.some(char => e.target.name.includes(char)))) ) {
                screenDiv.textContent = screenDiv.textContent;
                } 
                    
                else {screenDiv.textContent += e.target.name;}
                
                
            }

            extractNumbers(screenDiv.textContent);          
            return screenDiv.textContent;

            
            
            
            
        }



// extract numbers from the format: (abc+xyz)
function extractNumbers (textOnCalcScreen) {

            //console.log('screenDiv.textContent is ' + textOnCalcScreen);

            let arrayFromDisplay = textOnCalcScreen.split('');
            //index of operator
            
            //console.log('arrayFromDisplay is ' + arrayFromDisplay);
            // find the index of first non-numerical character
            let indexOfOperator = textOnCalcScreen.search(/[^0-9]/);
            let operator = arrayFromDisplay[indexOfOperator];
            //console.log('indexOfOperator is ' + indexOfOperator);
            /* console.log(arrayFromDisplay);
            console.log(indexOfOperator); */

            let stringFromArr1 = '';
            for (i=0; i<indexOfOperator; i++) {
                
                stringFromArr1 += arrayFromDisplay[i];
            }
            //console.log('stringFromArr1 is ' + stringFromArr1);
            let leftNum = +stringFromArr1;
            //console.log('leftNum is ' + leftNum);


            let stringFromArr2 = '';
            for (i=indexOfOperator; i<arrayFromDisplay.length; i++) {
                stringFromArr2 += arrayFromDisplay[i];
            }
            //console.log('stringFromArr1 is ' + stringFromArr1);
            let rightNum = +stringFromArr2;
            //console.log('leftNum is ' + leftNum);

            
            let numsAndOperator = [leftNum, rightNum, operator];

            //console.log(leftNum+rightNum);
            detectOperator(numsAndOperator);


}

function detectOperator (calcArr) {

    if(calcArr[2] === '+') {add(calcArr[0], calcArr[1]);}
    else if(calcArr[2] === '-') {subtract(calcArr[0], calcArr[1]);}
    else if(calcArr[2] === 'x') {multiply(calcArr[0], calcArr[1]);}
    else if(calcArr[2] === '/') {divide(calcArr[0], calcArr[1]);}
    else if(calcArr[2] === '%') {percent(calcArr[0], calcArr[1]);}
    else if(calcArr[2] === '+/-') {changeSign(calcArr[0], calcArr[1]);}

}
      


       
    
    













