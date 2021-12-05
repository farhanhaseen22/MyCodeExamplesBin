function capitalize (phrase) {
  let str = phrase;
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

arr = ["hundred and", "thousand and"]

var concat="";
for (let i = 0; i < arr.length; i++) {
    if(i == (arr.length - 1)){
        concat = concat + '"' + capitalize(arr[i]) + '"';
        continue;
    }
    concat = concat + '"' + capitalize(arr[i]) + '", ';
}

console.log(`[${concat}]`);