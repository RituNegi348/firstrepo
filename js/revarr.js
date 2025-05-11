let arr1 = [1, 2, 4, 5, 10, 12]
let arr2 = [6, 9, 13];
let arr3 = []
let i = 0;
let j = 0;
while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        arr3.push(arr1[i]);
        i++;
    }
    else{
        arr3.push(arr2[j]);
        j++;
    }
}
if(i!=arr1.length){
    for(let k=i;k<arr1.length;k++){
        arr3.push(arr1[k]);
    }
    
}
if(j!=arr1.length){
    for(let k=j;k<arr2.length;k++){
        arr3.push(arr2[k]);
}
}
console.log(arr3);