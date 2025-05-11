// find the first character in a string which is not reapeating aabbbbcddde
var str="eeeaee";
var i=0;
//  while(i<str.length)
// {
//    if((i>0&&i<str.length-1)&&(str[i]==str[i+1]||str[i]==str[i-1])){
//     i++;
//    }
//    else if(i==0){
//         if(str.length>1&&str[i]==str[i+1]){
//             i++;
//         }
//         else{
//             console.log(str[i]);
//             break;
//         }
//    }
//    else if(i==str.length-1){
//         if(str[i]==str[i-1]){
//             i++;
//         }
//         else{
//             console.log(str[i]);
//             break;
//         }
//    }
//    else{
//     console.log(str[i]);
//     break;
// }
// }

while(i<str.length){
    var j = i+1;
    var flag = false;
    while(j<str.length&&str[i]==str[j]){
        flag = true;
        j++;
    }
    if(flag==false){
        console.log(str[i]);
        break;
    }
    i = j;
}





// find the the character which doesnt have a duplicate  abacb
// var str="aaabbbcdde";
// for(let i=0;i<str.length;i++){
//     var found = false;
//  for(let j=0;j<str.length;j++){
//     if(str[i]==str[j]&& i!==j){
//        found = true;
//        break;
//     }
//  }
//  if(found==false){
//     console.log(str[i]);
//  }
// }

  