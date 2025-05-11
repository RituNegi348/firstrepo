// console.log(this)

// let user = {
//     name: "ritu",
//     print(){
//         console.log(this)
//         console.log(this.name);
//     }
// }
// user.print();
// const fun =  user.print
// fun();

// function fun(msg,age){
//     console.log(`${this.name} is `+msg+ age);
// }

// let user = {name: "ritu"}

// fun("kind", 19);
// const newfun = fun.bind(user);
// newfun("kind", 19)


function user(name){
    this.name = name;
}

const obj = new user("deepanshu");

console.log(obj.name)
