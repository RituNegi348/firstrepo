//program to check if two strings are equal or not
var str1="Hello";
var str2="Hello";
if(str1.length==str2.length)
{
    var flag=false;
    let i=0;
    while(i<str1.length)
    {
        if(str1[i]==str2[i])
            {
            i++;
        }
        else
        {
            flag=true;
        console.log("not equal");
    break;
        }
    }

if(flag==false){
    console.log("Equal");
}
}
else{
    console.log("Not equal");
}