//to count number of words
var str="my    name is ritu"
var counter=0;
for(let i=0;i<str.length-1;i++)
{
    if(str[i]==" "&&str[i+1]!=" ")
        counter++;

}
if(str.length>0)
    console.log(counter+1);
else
    console.log(0);