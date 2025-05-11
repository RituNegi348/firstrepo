var sentence = "My name is Khan";
function reversestr(sent) {
    var str = "";
    var rev = "";
    for (let i = 0; i <= sent.length; i++) {
        if (i != sent.length && sent[i] != " ") {
            str += sent[i];
        }
        else if (i == sent.length || sent[i] == " ") {
            for (let j = str.length - 1; j >= 0; j--) {
                rev += str[j];
            }
            if (i != sent.length) {

              rev=rev+" ";
            }
            str = "";
        }

    }
    return rev;
}

var result = reversestr(sentence);
console.log(result);
