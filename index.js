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
         
     return  theSumOfTheNumbersOfTheNthRow;
    
}
rowSumOddNumbers(6);


/*
4=1+4*2
3= 1+3*2
*/