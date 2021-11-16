    let nthNumber;
function rowSumOddNumbers(n) {
	let howManyNumbersAreThereInTheRows=0;
    let theLastNumberInNthRow;
    let theNumbersInTheNthRow;
    let theSumOfTheNumbersOfTheNthRow=0;
    

    for(let i=0; i<=n;i++){
        howManyNumbersAreThereInTheRows+=i;
        }
        
        theLastNumberInNthRow=2*howManyNumbersAreThereInTheRows-1;

        theNumbersInTheNthRow=theLastNumberInNthRow;
        for(let i=0; i<n;i++){
            theSumOfTheNumbersOfTheNthRow+=theNumbersInTheNthRow;
            theNumbersInTheNthRow-=2;
            } 
     document.querySelector("#result").textContent=`The sum of the numbers of the nth row is: ${theSumOfTheNumbersOfTheNthRow}`;
     return  theSumOfTheNumbersOfTheNthRow;
    
}

function nthNumberFunct (){
    nthNumber=document.querySelector("#nthNumber").value;
}

nthNumberFunct();
rowSumOddNumbers(nthNumber);

document.querySelector("#nthNumber").addEventListener("keyup",nthNumberFunct );
document.querySelector("#nthNumber").addEventListener("click",nthNumberFunct );

document.querySelector("#nthNumber").addEventListener("keyup",()=>rowSumOddNumbers(nthNumber) ); 
document.querySelector("#nthNumber").addEventListener("click",()=>rowSumOddNumbers(nthNumber) );   



