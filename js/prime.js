//program to check if any number is prime or not
function prime(num){
    if(num<=1){
        return false;
    }
    var counter=0;
    for(let i=2;i<=(num/2);i++){
        if(num%i==0){
            counter++;
            break;
        }
    }
        if(counter!=0){
        return false;
        }
        else{
            return true;
        }
}
var check=prime(17);
if(check==true){
    console.log("prime")
}
else{
    console.log("not a prime");
}