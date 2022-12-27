let outmostContainer = document.getElementById('outmostContainer');

let buttonText = ["AC", "+/-", "%", "/",
                 "7", "8", "9" ,"X", "4",
                "5", "6", "-", "1","2",
                "3", "+", "0", ",", "=",];


for (let i=1; i<=19; i++) {
    let createBtn = document.createElement('button');
    createBtn.id = 'buttons';
    createBtn.textContent= 'button ' + i;
    createBtn.style.width= '65px';
    createBtn.style.height = '65px';
    outmostContainer.appendChild(createBtn);
    createBtn.style.backgroundColor = 'yellow';
    writeSymbols(createBtn);
}

let btn = document.querySelector("button");
/* let zeroBtn = document.querySelector("button:nth-child(18)");
zeroBtn.textContent = 0;  */



function writeSymbols (symbol) {

for (let i=0; i<20; i++) {
    let btnSymbols = document.createElement('');
    btnSymbols.querySelector(`button:nth-child(${i})`);
    
    btnSymbols.style.textContent = buttonText[i];
    return btnSymbols;
}
}

// zeroBtn.style.width = '130px';



