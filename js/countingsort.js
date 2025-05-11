// let arr=[2, 3, 1, 6, 5, 0, 7];
// let count =new Map();
// let arr2=[];
// for(let i=0;i<arr.length;i++){
//     if(count.has(arr[i])){
//     count.set(arr[i],count.get(arr[i]+1));
//     }
//     else{
//         count.set(arr[i],1);
//     }
// }
// for(let[key,value] of count){
//     for(let k=value;k>0;k--){
//       arr2.push(key);  
//     }
// }
// console.log(arr2);


let arr=[4, 2, 2, 8, 3, 3, 1, 0, 7];
let n=arr.length;
let max=10;
let arr3=[];
for (let i=1;i<n;i++) {
    if (arr[i]>max) {
        max=arr[i];
    }
}
let count=[];
for (let i=0;i<=max;i++) {
    count[i]=0;
}
for (let i=0;i<n;i++) {
    count[arr[i]]=count[arr[i]] + 1;
}
let index = 0;
for (let i=max;i>=0;i--) {
    while (count[i]>0) {
        arr[index]=i;
        index = index + 1;
        count[i]=count[i]-1;
    }
}
for (let i=0;i<n;i++) {
    arr3.push(arr[i]);
}
console.log(arr3);
