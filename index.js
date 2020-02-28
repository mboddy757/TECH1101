console.log("js running!!");
//income=0;//initializing this varible as local ****** MAYBE REMOVE ******  ALSO THIS BREAKS IT
incomeRef=document.querySelector("#income");//incomeRef holds the reference to location in the HTML document where income will be entered

//submit button code
const submitBtnRef = document.querySelector("#submitIncome");//submitButnRef holds the reference to the submit button
submitBtnRef.addEventListener("click", submitIncomeFun);//listens for the submit button to be pressed, will run submitIncomeFun()
function submitIncomeFun(){//function to accept user input from income text box
    if(isNaN(parseFloat(income.value))){//if true user has entered a non number
        console.log(income.value);
        console.log("not a damn number");
        postErrorMessage();
    }
    else{//if true user has entered a number
        income =parseFloat(incomeRef.value);
        console.log("is a damn number");
        console.log(income);
        console.log("typeof income", typeof(income));
        
    }
}

//Clear Button code
const clearBtnRef = document.querySelector("#clearIncome");//submitBtnRef holds the reference to the clear button
clearBtnRef.addEventListener("click", clearIncomeFun);//listens fot the clear button to be pressed, will run colearIncomeFun

function clearIncomeFun(){//function to clear income input box
    document.querySelector("#income").value = null;
    removeErrorMessage()
}


function postErrorMessage(){
    const newNode = document.createElement("h3");
    const newTextnode = document.createTextNode("Error: enter a number");
    newNode.appendChild(newTextnode);
    document.getElementById("messageArea").appendChild(newNode);
  }

function removeErrorMessage(){
    document.getElementById("messageArea").removeChild();
}


