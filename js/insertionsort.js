//insertion sort ascending
// let arr=[2, 3, 1, 6, 5, 0, 7];
// for(let i=0;i<arr.length;i++){
//     for(let j=i;j>=0;j--){
//         if(arr[j]<arr[j-1]){
//             let temp=arr[j];
//             arr[j]=arr[j-1];
//             arr[j-1]=temp;
//         }
//         else{
//             break;
//         }
//     }
// }
// console.log(arr);



//insertion sort in descending
let arr=[2, 3, 1, 6, 5, 0, 7];
for(let i=0;i<arr.length;i++){
    for(let j=i;j>=0;j--){
        if(arr[j]>arr[j-1]){
            let temp=arr[j];
            arr[j]=arr[j-1];
            arr[j-1]=temp;
        }
        else{
            break;
        }
    }
}
console.log(arr);
