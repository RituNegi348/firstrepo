// let arr=[1,3,2,4,6,5];
// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<(arr.length-1)-i;j++){
//         if(arr[j]>arr[j+1]){
//            let Temp=arr[j];
//            arr[j]=arr[j+1];
//            arr[j+1]=Temp;
//         }
//     }
// }
// console.log(arr);
let arr=[1,3,2,4,6,5];
for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<(arr.length-1)-i;j++){
        if(arr[j]<arr[j+1]){
           let Temp=arr[j];
           arr[j]=arr[j+1];
           arr[j+1]=Temp;
        }
    }
}
console.log(arr);
