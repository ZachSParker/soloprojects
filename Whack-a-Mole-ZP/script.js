// this function resets the points value to 0
function pointsClear(id){
    var element = document.querySelector(`#${id}`)
    element.innerText = 0;
    
}
//this function increments the points value
function pointsUp(id){
    var element = document.querySelector(`#${id}`)
    element.innerText++;
}
//this function hides the mole and then waits for 300ms before calling the moleAppear() function.
function hideMole(element){
    console.log(element);
    // let element = document.querySelector(`#${id}`)
    element.style.display ="none";
}
function moleAppear(id){
    let element = document.querySelector(`#${id}`)
    element.style.display ="block";
}
