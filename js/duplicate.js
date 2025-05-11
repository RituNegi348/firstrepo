let arr=[1,4,2,1,4,5];
function duplicate(a){
    const dup=new Set();
for(let i=0;i<a.length;i++){
dup.add(a[i]); 
}
let arr2=[];
for(const x of dup)
    arr2.push(x);
return arr2;
}   
let result=duplicate(arr);
console.log(result);