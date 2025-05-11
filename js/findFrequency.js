//find the frequency of a particular character in a string;
const str = "ykekcjkd";
const char = 'y'
// var counter=0;
// for(let i=0;i<str.length;i++)
// {
//     if(str[i]==char)
//         counter++;

// }
// console.log(char+" = "+counter);
let mapp = new Map();
for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
        if (mapp.has(char)) {
            mapp.set(char, mapp.get(char) + 1);
        }
        else {
            mapp.set(str[i], 1);

        }
    }
}

console.log(mapp.get(char));