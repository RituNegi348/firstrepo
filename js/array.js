var arr1 = new Array();
var arr2;
arr1.push(10);
arr1.push(20);
arr1.push(30);
// arr1.shift() // removes from starting;
arr1.unshift(60) //adds at starting
arr2 = arr1

// console.log(arr2)

arr2.push(40)

// console.log(arr2)
// console.log(arr1);

var arr3 = [1,2,3,4];

// console.log(arr1 == arr3); // false

// console.log(arr1 == arr2); // true

// for(let i = 0; i<arr1.length;i++){
//     console.log(arr1[i]);
// }

// arr1.forEach((num,index)=>{
//     console.log(num);
// })


// function fun (num,index){
//     console.log(num);
// }

// arr1.forEach(fun)

// for(let ind in arr1){
//     console.log(arr1[ind]);
// }

// arr1.map((num,ind)=>{
//     console.log(num);
// })

// let arr4 = arr1.filter((num,ind)=> ind!==1)

// console.log(arr4);

if(arr1.includes(100)){
    console.log("yes");
}
else{
    console.log("no")
}

arr1.sort((x,y)=> y-x);


console.log(arr1);





