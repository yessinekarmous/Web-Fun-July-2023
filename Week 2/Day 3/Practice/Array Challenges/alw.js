
function alwaysHungry(arr) {
    var j=0
    for(i=0;i<=4;i++){
        if(arr[i]==="food"){
            console.log("yummy")
            j=j+1
        }
    }
    if(j==0){
        console.log("I am Hungry")
    }
}
console.log("/////")
alwaysHungry([3.14, "food", "pie", true, "food"]);
console.log("/////")
alwaysHungry([4, 1, 5, 7, 2]);

console.log("/////")

function highPass(arr, cutoff) {
    var filteredArr = [];
    var j=0
    for(i=0; i<=arr.length-1 ;i++){
        if(arr[i]>cutoff){
            filteredArr[j]=arr[i]
            j++
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
console.log("//////")
// ----Average----
function betterThanAverage(arr) {
    var sum = 0;
    for(i=0;i<=arr.length-1;i++){
        sum=sum+arr[i]
    }
    var Ave=sum/arr.length
    var count = 0
    for(i=0;i<=arr.length-1;i++){
        if(arr[i]>Ave){
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
console.log("///vv///")
// ----Reverse----
function reverse(arr) {
        var j=arr.length-1
        if((j%2)==0){
            for(i=0;i<=arr.length/2;i++){
            c=arr[i]
            arr[i]=arr[j]
            arr[j]=c
            j--
        }
        }
        else{
            for(i=0;i<=(arr.length-1)/2;i++){
            c=arr[i]
            arr[i]=arr[j]
            arr[j]=c
            j--
            
        }
}
return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
