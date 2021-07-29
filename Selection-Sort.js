var collection = [4, 3, 1, 2,];
var n = 5;

var i, j, min_element, count=0;
let count2=1;

function swap(collection, min_element, i){

    // Swap the found minimum element with the first element
    var temp = collection[min_element];
    collection[min_element] = collection[i];
    collection[i] = temp;
    count++;
}

// One by one move boundary of unsorted subarray
for (i = 0; i < n-1; i++)
{
    // count2++;
    // Find the minimum element in unsorted array
    min_element = i;
    for (j = i + 1; j < n; j++){
        if (collection[j] < collection[min_element])
            min_element = j;
    }
    if(collection[i] != (i+1))
        swap(collection, min_element, i);

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
console.log(count);
// console.log(count2);
