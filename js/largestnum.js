//program to find the largest number
var arr = [12,1,23,45,3,99,2,11,0,23]
function number(arr){
    var store=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>store)
        store=arr[i];
}
return store;
}
var great=number(arr);
console.log(great);