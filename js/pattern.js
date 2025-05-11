// let n = 10;
// for (let i = 1; i <= n; i++) {
//     let str = "";
//     for(letl j=1;j<=i;j++){
//         str+= "*"
//     }
//     console.log(str);
// }


// let num=0;
// let n=4;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=i;j++){
//     num+=1;
//     str+=" "+num;
//     }
// console.log(str);
// }



let counter=1;
let n=10;
for (let i=1;i<=n;i++){
    let str1="";
    let str2="";
    for(let j=1;j<=counter;j++){
        str1+="*";
       
   }
   counter+=2;
   for(let s=1;s<=n-i;s++){
    
        str2+=" ";
    }
   console.log(str2+str1);
}

