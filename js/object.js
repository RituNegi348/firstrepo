// var obj = {
//     2: "ritu",
//     1: 21,
//     skill: "html",
//     ageadder: function (){
//         console.log(obj[1]+5);
//     }
// };
// obj.ageadder();

// var obj1 = new Object();
// obj1.name = "deep"
// obj1.age = 10
// console.log(obj1.skill);
// obj1.skill = "css"
// console.log(obj1.skill);

// var user = {
//     name: "ritu",
//     lastname: "negi",
//     changename: function (name){
//         console.log(this);
//         this.name = name;
//     }
// }


// delete user.lastname;


// for(let a in user){
//     console.log(user[a]);
// }

let animal = {
    eats: "grass",
}

let rabbit = {
    jumps: true,
}


let man = {animal: animal}


let longEar = {
    length : 20,
    __proto__ : man,
}


longEar.__proto__.man = "flesh"

// console.log(longEar);
// //console.log(longEar.rabbit.jumps);
// console.log(longEar.man);
// console.log(man)

var name = "ritu"
var date = new Date();
console.log(date.getDay());


const data = require("./data.json")

console.log(data.name)


