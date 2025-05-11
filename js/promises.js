console.log("start")

const promise = new Promise((resolve,reject)=>{
    let n  = 20;
    let arr = [1,2,3,4,20];
    for(let i=0;i<arr.length;i++){
        if(arr[i]==n){
            resolve({
                name: "ritu"
            })
        }
    }
    reject("server error")
})

promise.then((result)=>{
    console.log(result)
    result.age = 21

})
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error+ "ajkdfj")
})

console.log("end")
