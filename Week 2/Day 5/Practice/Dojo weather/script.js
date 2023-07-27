var Cookie=document.querySelector(".Cookie")
function Remove(){
    Cookie.remove()

}
var Min=document.querySelector("#Min")
var Max=document.querySelector("#Max")
var MaxInt=parseInt(Max)
var MinInt=parseInt(Min)

var Unit=document.querySelector("#Nat")
console.log(Unit.value)
console.log(MaxInt);
/* function Change() {
    if(Unit.value=="°F"){
        MaxInt.innerHTML=MaxInt.innerHTML*2
        console.log(Unit.value)
    }
    else if(Unit.value=="°C"){
        Max.innerHTML=Max.innerHTML*8
        console.log(Unit.value)
    }
    } */
/* var Max=document.querySelector("#Max")
var Min=document.querySelector("#Min")
function Change() {
    var Unit=document.querySelector("#Nat")
    console.log(Unit.value)}
/* if(Unit.value=="F"){
    Max.innerHTML=Max.innerHTML*2
}
else if(Unit.value=="C"){
    Max.innerHTML=Max.innerHTML*8
}} */ 