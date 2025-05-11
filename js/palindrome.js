// var str="ealbe";
// var str2="";
// for(let i=str.length-1;i>=0;i--)
// {
//     str2+=str[i];
// }
// if(str2==str)
// {
//     console.log("Palindrome");
// }
// else{
//     console.log("not a palindrome");
// }
// var i=str.length-1;
// var j=0;
// var flag=true;
// while(j<i)
// {
//     if(str[i]==str[j])
//     {
//         j++;
//         i--;
//     }
//     else{
//         flag=false;
//         console.log("Not a palindrome");
//         break;
//     }
// }
// if(flag==true){
// console.log("palindrome");
// }


//program to check if tehe given nymber is palindrome or not

function fun(a){
   var temp=a;
    var rev=0;
    while(a>0)
    { 
        var rem=a%10;
        rev=rev*10+rem;
        a=Math.floor(a/10);
    }
    if(temp==rev){
        return true;
    }
    else{
        return false;
    }

}
var result=fun(10);
if(result){
    console.log("Number is palindrome.");
}
else{
    console.log("Number is not a palindrome number.");
}