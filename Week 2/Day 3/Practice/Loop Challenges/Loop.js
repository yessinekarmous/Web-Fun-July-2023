for(p=1;p<=20;p++){
    if((p%2)==0){
        console.log(p)
    }
}
// ----divi/2---
console.log("///")
for(p=100;p>=0;p--){
    if((p%3)==0){
        console.log(p)
    }
}
// ----Array----
console.log("////")
var MyArray=[4,2.5,1,-0.5,-2,-3.5]
for(i=-3.5;i<=4;i++){
    for(j=0;j<=5;j++){
        if(i==MyArray[j]){
            console.log(i)
        }
    }
    i=i+0.5
}
// ----SUM----
console.log("/////")
var Sum=0
for(i=1;i<=100;i++){
    Sum=Sum+i
}
console.log(Sum)

// ----Product----
console.log("/////")
var Pro=1
for(i=1;i<=12;i++){
    Pro=Pro*i
}
console.log(Pro)





