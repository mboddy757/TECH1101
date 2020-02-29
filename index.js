console.log("js running!!");
//income=0;//initializing this varible as local ****** MAYBE REMOVE ******  ALSO THIS BREAKS IT
//local varibles
//let totalTax, income;//must use let or will be declared globally within submitIncomeFun(), which would be worse

//submit button code
incomeRef=document.querySelector("#income");//incomeRef holds the reference to location in the HTML document where income will be entered
const submitBtnRef = document.querySelector("#submitIncome");//submitButnRef holds the reference to the submit button
submitBtnRef.addEventListener("click", submitIncomeFun);//listens for the submit button to be pressed, will run submitIncomeFun()

function submitIncomeFun(){//function to accept user input from income text box
    if(isNaN(parseFloat(incomeRef.value))){//if true user has entered a non number
        postErrorMessage();
    }
    else{//if true user has entered a number
        const income =parseFloat(incomeRef.value);
        const totalTax=calculateTax(income);
        postTax(totalTax.toFixed(2));
        const effectiveTaxRate=(totalTax/income*100).toFixed(2);
        postEffectiveTaxRate(effectiveTaxRate);
        const retainedEarnings=(income-totalTax).toFixed(2);
        postRetainedEarnings(retainedEarnings);
    }
}

//clear button code
const clearBtnRef = document.querySelector("#clearIncome");//submitBtnRef holds the reference to the clear button
clearBtnRef.addEventListener("click", clearIncomeFun);//listens fot the clear button to be pressed, will run colearIncomeFun

function clearIncomeFun(){//function to clear income input box
    document.querySelector("#income").value = null;
    removeErrorMessage()
    removePostTax()
    resetTax()
    removeEffectiveTaxRate()
    resetTaxRate()
    removeRetainedEarnings()
    resetRetainedEarnings()
}

//postErrorMessage() code
const messageAreaRef=document.getElementById("messageArea");//required for postErrorMessage() and removeErrorMessage()

function postErrorMessage(){
    const newNode = document.createElement("h3");
    const newTextNode = document.createTextNode("Error: enter a number");
    newNode.appendChild(newTextNode);
    messageAreaRef.appendChild(newNode).setAttribute("id", "errorMessage");//ID part is NOT NEEDED
}

//removeErrorMessage code
function removeErrorMessage(){
    while(messageAreaRef.hasChildNodes()){
        messageAreaRef.removeChild(messageAreaRef.childNodes[0]);//
    }
}

//calcaulte tax code
function calculateTax(income){
    const taxBracket1Max=48535;//tax bracket thresholds are stored as const varibles to make future updating eaisier
    const taxBracket2Max=97069;//could use an array, but ran out of time
    const taxBracket3Max=150473;
    const taxBracket4Max=214368;
    const taxBracket1Rate=0.15;//tax bracket rates are stored as const varibles to make future updating eaisier
    const taxBracket2Rate=0.205;//could use an array, but ran out of time
    const taxBracket3Rate=0.26;
    const taxBracket4Rate=0.29;
    const taxBracket5Rate=0.33;
    let tax;//i just couldn't LET this be a const :) also it needs to be mutable

    if(income<=0) tax=0;//zero or negative income, zero tax due. important because negative income would result in erronuus refund
    else{//income is positive number
        if (income<=taxBracket1Max){//income is within tax bracket 1
            tax=income*taxBracket1Rate;//calculates tax on income within tax bracket 1
        }
        else{//income exceeds tax bracket 1
            tax=taxBracket1Max*taxBracket1Rate;//tax for bracket 1 is maximum

            if(income<=taxBracket2Max){//income is within tax bracket 2
                tax+=(income-taxBracket1Max)*taxBracket2Rate;//calculates tax on income within tax bracket 2
            }
            else{//income exceeds tax bracket 2 
                tax+=(taxBracket2Max-taxBracket1Max)*taxBracket2Rate;//tax for bracket 2 is maximum
            
                if(income<=taxBracket3Max){//income is within tax bracket 3
                    tax+=(income-taxBracket2Max)*taxBracket3Rate;//calculates tax on income within tax bracket 3
                }
                else{//income exceeds tax bracket 3
                    tax+=(taxBracket3Max-taxBracket2Max)*taxBracket3Rate;//tax for bracket 3 is maximum
                
                    if((income<=taxBracket4Max)){//income is within tax bracket 4
                        tax+=(income-taxBracket3Max)*taxBracket4Rate;//calculates tax on income within tax brackets 4
                    } 
                    else{//income exceeds tax bracket 4 and is therefore within tax bracket 5
                        tax+=(taxBracket4Max-taxBracket3Max)*taxBracket4Rate;//tax for bracket 4 is maximum
                        tax+=(income-taxBracket4Max)*taxBracket5Rate;//calculates tax on income within tax bracket 5    
                    }
                }  
            }
        }
    }
    return tax;
}

//post tax code
const taxOwedRef=document.getElementById("taxOwed");

function postTax(tax){
    removePostTax();
    const newNode = document.createElement("h3");
    const newTextNode = document.createTextNode("Tax owed: $"+tax);
    newNode.appendChild(newTextNode);
    taxOwedRef.appendChild(newNode);
}

function removePostTax(){//remove tax code
    while(taxOwedRef.hasChildNodes()){
        taxOwedRef.removeChild(taxOwedRef.childNodes[0]);    
    }
}

function resetTax(){//reset tax code
    const newNode = document.createElement("h3");
    const newTextNode = document.createTextNode("Tax owed:");
    newNode.appendChild(newTextNode);
    taxOwedRef.appendChild(newNode);
}

//post effective tax rate code
const effectiveTaxRateRef=document.getElementById("effectiveTaxRate");

function postEffectiveTaxRate(effectiveTaxRate){ 
    removeEffectiveTaxRate();
    const newNode = document.createElement("h3");
    const newTextNode = document.createTextNode("Effective tax Rate: "+effectiveTaxRate+"%");
    newNode.appendChild(newTextNode);
    effectiveTaxRateRef.appendChild(newNode);
}

function removeEffectiveTaxRate(){//remove effective tax rate
    while(effectiveTaxRateRef.hasChildNodes()){
        effectiveTaxRateRef.removeChild(effectiveTaxRateRef.childNodes[0]);    
    }
}

function resetTaxRate(){//reset effective tax rate
    const newNode = document.createElement("h3");
    const newTextNode = document.createTextNode("Effective tax Rate:");
    newNode.appendChild(newTextNode);
    effectiveTaxRateRef.appendChild(newNode);
}

//post retained earnings code
const retainedEarningsRef=document.getElementById("retainedEarnings");

function postRetainedEarnings(retainedEarnings){
    removeRetainedEarnings()
    const newNode = document.createElement("h3");
    const newTextNode = document.createTextNode("Retained Earnings: $"+retainedEarnings);
    newNode.appendChild(newTextNode);
    retainedEarningsRef.appendChild(newNode);
}

function removeRetainedEarnings(){//remove retained earnings
    while(retainedEarningsRef.hasChildNodes()){
        retainedEarningsRef.removeChild(retainedEarningsRef.childNodes[0]);    
    }
}
function resetRetainedEarnings(){//reset retained earnings
    const newNode = document.createElement("h3");
    const newTextNode = document.createTextNode("Retained Earnings:");
    newNode.appendChild(newTextNode);
    retainedEarningsRef.appendChild(newNode)
}