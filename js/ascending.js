//program to check if the given arrray is ascending or not
var arr=[1,2,3,8,4,5] 
function Ascending(a){
  let i=0;
  while(i<a.length-1){
    if(a[i]<=a[i+1]){
        i++;
    }
    else{
        break;
    }
  }
  if(i==a.length-1){
    return true;
  }
  else{
    return false;
  }
}
var result=Ascending(arr);
if(result==true){
    console.log("Ascending");
}
else{
    console.log("Not an ascending");
}