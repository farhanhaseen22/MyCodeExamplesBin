let collection = [3, 7, 5, 6, 4, 2, 1];
let n = collection.length, count=1, count2=1;

let i, key, j; 
for (i = 1; i < n; i++)
{ 
    // count2++;
    key = collection[i]; 
    j = i - 1; 

    /* Move elements of collection[0..i-1], that are 
    greater than key, to one position ahead 
    of their current position */
    while (j >= 0 && collection[j] > key)
    {
        // count++;
        collection[j + 1] = collection[j]; 
        j = j - 1; 
    } 
    collection[j + 1] = key;

    let s = "";
    for (let i = 0; i < collection.length; i++){
        i == 0 ? s = s+collection[i] : s = s+' -> '+collection[i];
    }
    console.log(s);
}

let s1 = "";
console.log('Final: ');
for (let i = 0; i < collection.length; i++){
    i == 0 ? s1 = s1+collection[i] : s1 = s1+' -> '+collection[i];
}
console.log(s1);
// console.log(count);
// console.log(count2);
