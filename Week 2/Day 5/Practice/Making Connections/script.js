var namer=document.querySelector("#Namer")

function changeName(){
    namer.innerText="Ahmed K"
}
var Number=document.querySelector(".Num")
var Number2=document.querySelector(".Num2")

function Remove(bouton){
    var No=document.querySelector("#No")
    No.remove()
    Number.innerHTML--
    if(bouton.id=="yesCLick"){
        Number2.innerHTML++
    }
}



