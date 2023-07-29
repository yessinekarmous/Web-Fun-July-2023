var Cookie=document.querySelector(".Cookie")
function Remove(){
    Cookie.remove()

}
var Min=document.querySelector("#Min")
var Max=document.querySelector("#Max")
// Min.innerHTML=18
// Max.innerHTML=24

var Unit=document.querySelector("#Nat")
console.log(Unit.value)


function FtoC(t){
    return Math.round((t - 32) * 5/9)
}
function CtoF(t){
    return Math.round((t * 9/5) + 32)
}
// ---Initialisation de lab----
var Array=[24,18,27,19,21,16,26,21]
for(j=0;j<=7;j++){
    c=document.getElementById(j)
    c.innerHTML=Array[j]+"°"
}

// ---function onclick----
function Change(){
    console.log(Unit.value)
    if(Unit.value=="°C"){
        for(i=0;i<=7;i+=2){
        
        Array[i]=FtoC(Array[i])
        Array[i+1]=FtoC(Array[i+1])
        var p=document.getElementById(i)
        console.log(p)
        var p2=document.getElementById(i+1)
        p.innerHTML=Array[i]+"°"
        p2.innerHTML=Array[i+1]+"°"
        
    }}
    else if(Unit.value=="°F"){
        for(i=0;i<=7;i+=2){
        Array[i]=CtoF(Array[i])
        Array[i+1]=CtoF(Array[i+1])
        var p=document.getElementById(i)
        var p2=document.getElementById(i+1)
        p.innerHTML=Array[i]+"°"
        p2.innerHTML=Array[i+1]+"°"
        
    }
}}