let num1 = "";
let num2 = "";
let operator = "";
function setOP(element)
{   
    var deciOp = ""
    if(operator =="."){
        deciOp = num1 + ".";
        num1 = deciOp;
    }
    operator = element;
    num2 = num1;
    
    num1 = "";
    
}
function press(element)
{
    calcDisplay = document.querySelector('#display');

    if(num1 == ""){
        calcDisplay.innerText = element;
    }
    else{
        calcDisplay.innerText += element;
    }
    num1 = calcDisplay.innerText;
    return calcDisplay;
}
function calculate()
{
    sum = 0;
    if(operator=="x"){
        sum = num1 * num2;
    }
    else if(operator == "/"){
        sum = num2 / num1;
    }
    else if(operator == "+"){
        sum = num2 += num1;
    }
    calcDisplay.innerText = sum;
}
function clr()
{
    calcDisplay.innerHTML = 0;
    num1 = "";
    num2 = "";
    operator = "";
}