
function setOP(element)
{
    
}
function press(element)
{
    calcDisplay = document.querySelector('#display');
    calcDisplay.innerHTML +=`${element}`
    console.log(calcDisplay);
    return calcDisplay;
}
function calculate()
{

}
function clr()
{
    calcDisplay.innerHTML = 0;
}