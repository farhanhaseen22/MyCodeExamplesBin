let strings = ['wuw','abcde','sdaklfj','asdjf','na','basdn','sdaklfj','asdjf','na','asdjf','na','basdn','sdaklfj','asdjf']
let queries = ['abcde','sdaklfj','asdjf','na','basdn']

var map = {};
var freq = [];
for (var i = 0; i < strings.length; i++) {
    map[strings[i]] = (map[strings[i]] || 0) + 1;
}
for (var i = 0; i < queries.length; i++) {
    if ( map[queries[i]] )
        freq.push(map[queries[i]]);
    else
        freq.push(0);
}

console.log(map);
console.log(queries);
freq.forEach((value, index) => {
    console.log(index+': '+value);
});
