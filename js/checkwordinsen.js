//JS program to check if the word exists in the sentence or not 
var str1 = "My name is khan";
var str2 = "or";
var str3 = "";
var flag=false;
for (let i = 0; i<=str1.length; i++) {
    if (i<str1.length && str1[i] != " ") 
    {
        str3+=str1[i];
    }
    else if(str1[i]==" "|| i==str1.length)
    {
        if(str3===str2){
            console.log("found");
            flag=true;
            break;
        }
        else{
            str3="";
        }
    }
      
}
if(flag==false)
    {
        console.log("Not found");
    }