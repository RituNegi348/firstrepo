var str1="string operator";
var counter1=0;
var counter2=0;
for(let i=0;i<str1.length;i++){
    if(str1[i]=="a"||str1[i]=="A"||str1[i]=="e"||str1[i]=="E"||str1[i]=="i"||str1[i]=="I"
        ||str1[i]=="o"||str1[i]=="O"||str1[i]=="O"||str1[i]=="u"||str1[i]=="U")
        {
        counter1++;
        }
        if(str1[i]==" "){
            counter2++;
        }
}
console.log("number of vowels "+counter1);
console.log("number of space "+counter2);
