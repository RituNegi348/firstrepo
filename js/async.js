// console.log("start");


// setTimeout(()=>{
//     console.log("callback1")
// },0);


// setTimeout(()=>{
//     console.log("callback2")
// },0);


// setTimeout(()=>{
//     console.log("callback3")
// },0);

// console.log("middle")
// for(let i=0;i<1000000;i++){

// }

// console.log("end");

function fun(name){
    console.log("hell0"+name)
}

const id = setInterval(fun,1000,"deepa");

setTimeout(()=>{
    clearInterval(id)
},5000)


