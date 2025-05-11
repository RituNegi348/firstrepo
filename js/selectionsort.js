//program to apply selection sort
// let arr = [2, 3, 1, 6, 5, 0, 7];
// for (let i = 0; i < arr.length - 1; i++) {
//     let check = 100;
//     let index = -1;
//     for (let j = i; j < arr.length; j++) {
//         if (arr[j] < check) {
//             check = arr[j];
//             index = j;
//         }
//     }
//         let temp = arr[index];
//         arr[index] = arr[i];
//         arr[i] = temp;
    
// }
// console.log(arr);


let arr = [2, 3, 1, 6, 5, 0, 7];
for (let i = 0; i < arr.length - 1; i++) {
    let check = 0;
    let index = -1;
    for (let j = i; j < arr.length; j++) {
        if (arr[j] > check) {
            check = arr[j];
            index = j;
        }
    }
        let temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;
    
}
console.log(arr);