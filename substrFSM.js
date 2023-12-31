str = "abracadabra";
sub = "bra";

let alphabet = new Map();
let table = [];
for (let letter of sub) {
    alphabet[letter] = 0;
}
for (let i = 0; i <= sub.length; ++i) {
    table[i] = {};
}

for (let i = 0; i <= sub.length; ++i) {
    for (let c in alphabet) {
        const x = sub.slice(0, i) + c;

        table[i][c] = 0;
        for (let j = 0; j < x.length; j++) {
            if (sub.startsWith(x.slice(j))) {
                table[i][c] = x.length - j;
                break;
            }
        }
    }
}


let needState = sub.length;
let curState = 0;
let matches = [];

for (let i = 0; i < str.length; i++) {
    let newState = table[curState][str.charAt(i)];
    if (newState !== undefined) curState = newState;
    else curState = 0;
    
    if (curState === needState)
        matches.push(i - sub.length + 1);
}
console.log(matches);