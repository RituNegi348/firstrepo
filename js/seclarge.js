//program to find the second largest number in an aray
let arr=[1,4,2,6,8,0];
let n=0;
let a=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>n)
        n=arr[i];
}
console.log(n);
for(let i=0;i<arr.length;i++){
    if(arr[i]>a && arr[i]!=n)
        a=arr[i];
}
console.log("secondlargest="+a);