//
var s = "lii";
var q = "ili";
// var arr1 = []
// var arr2 = [];

// for(let i=0;i<26;i++){
//     arr1.push(0);
//     arr2.push(0);
// }

// for(let i=0;i<s.length;i++){
//     arr1[s[i].charCodeAt(0)-97] +=1;
// }

// for(let i=0;i<q.length;i++){
//     arr2[q[i].charCodeAt(0)-97] +=1;
// }
// var ans = true;
// for(let i=0;i<26;i++){
//     if(arr1[i]!=arr2[i]){
//         ans = false;
//         break;
//     }
// }

// console.log(ans);

var map1 = new Map();
var map2 = new Map();

for(let i=0;i<s.length;i++){
    if(map1.has(s[i])){
        map1.set(s[i],map1.get(s[i])+1);
    }
    else{
        map1.set(s[i],1);
    }
}

for(let i=0;i<q.length;i++){
    if(map2.has(q[i])){
        map2.set(q[i],map2.get(q[i])+1);
    }
    else{
        map2.set(q[i],1);
    }
}

if(s.length !== q.length){
    console.log(false);
}
else{
    var ans = true;
    for(let key of map1.keys()){
        if(map2.has(key)){
            if(map2.get(key)!=map1.get(key)){
                ans = false;
                break;
            }
        }
        else{
            ans= false;
            break;
        }
    }
    console.log(ans);
}
