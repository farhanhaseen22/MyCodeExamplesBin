let collection = [4, 3, 5, 2,];

let i, j, min_element, minVal=10000, count=0;

for (j = 0; j < collection.length; j++)
    if (collection[j] < minVal)
        minVal = collection[j];

for (i = 0; i < collection.length-1; i++)
{
    if(collection[i] != (i+minVal)){

        console.log(collection[i]+" =/= "+(i+minVal));

        min_element = i;
        for (j = i + 1; j < collection.length; j++){
            if (collection[j] < collection[min_element])
                min_element = j;
        }

        let temp = collection[min_element];
        collection[min_element] = collection[i];
        collection[i] = temp;
        count++;
    }
    
}

let s1 = "";
console.log('Final: ');
for (let i = 0; i < collection.length; i++){
    i == 0 ? s1 = s1+collection[i] : s1 = s1+' -> '+collection[i];
}
console.log(s1);
console.log(count);
// console.log(minVal);
