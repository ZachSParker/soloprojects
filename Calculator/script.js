let num1 = 0;
let num2 = 0;
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
    console.log(typeof(num1));
    console.log(typeof(num2));
    calcDisplay = document.querySelector('#display');
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var sum = 0;
    if(operator=="*"){
        sum = num1 * num2;
    }
    else if(operator == "/"){
        sum = num2 / num1;
    }
    else if(operator == "+"){
        
        sum = num1 + num2;
        
    }
    else if(operator == "-"){
        sum = num2 - num1;
    }
    calcDisplay.innerText = sum;
    num1 = calcDisplay.innerText;
    return sum;
}
function clr()
{
    calcDisplay.innerHTML = 0;
    num1 = "";
    num2 = "";
    operator = "";
}