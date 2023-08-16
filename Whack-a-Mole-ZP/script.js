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
function hideMole(id){
    let element = document.querySelector(`#${id}`)
    element.style.display ="none";
    setTimeout(moleAppear,300,`#${id}`)
}
function moleAppear(id){
    let element = document.querySelector(`#${id}`)
    element.style.display ="block";
}
