var obj = {
    name: "ritu",
    age: 21,
    skill: "html",
    ageadder: function (){
        console.log(this.age+5);
    }
};
obj.ageadder();
