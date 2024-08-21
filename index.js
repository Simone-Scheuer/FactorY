
let inputBtn = document.getElementById("input-btn")

function generatefactors() {
    let numEL1 = document.getElementById("input-el1").value
    let numEL2 = document.getElementById("input-el2").value
    let commonfactorsEL = document.getElementById("commonfactors-el")
    let num1factorsEL = document.getElementById("num1factors-el")
    let num2factorsEL = document.getElementById("num2factors-el")
     if (!numEL1 || !numEL2) {
        num1factorsEL.textContent = "Please Enter Two Numbers";
        num2factorsEL.textContent = "";
        commonfactorsEL.textContent = "";
        return;
    }
    
    commonfactorsEL.textContent = findcommonfactors(numEL1,numEL2)
    num1factorsEL.textContent = findindividualfactors(numEL1)
    num2factorsEL.textContent = findindividualfactors(numEL2)
    
}

function findcommonfactors(num1,num2) {
    let commonfactors = []
    let greaternum = 0
    if (num1 > num2) {
        greaternum = num1
    }
    else
    {
        greaternum = num2
    }
    for(let i=1; i <= greaternum; i++) 
    {
            if (num1 % i === 0 && num2 % i === 0) 
            {
                commonfactors.push(i)
            }
    }
    if (commonfactors.length > 0)
    {
    return "Common Factors of " + num1 + " and " + num2 + ": " + commonfactors
    }
    else
    {
        return "No Common Factors Found"
    }
}

function findindividualfactors(num)
{
let factors = []
    for(let i=1; i <= num; i++) 
    {
            if (num % i === 0) 
            {
                factors.push(i)
            }
    }
return "Factors of " + num + ": " + factors
}