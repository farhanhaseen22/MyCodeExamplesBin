// there always need to have space at the end
let text = "24585456123 ";
let result = text.replace(/[0-9](?=([0-9]{3})+\D)/g, e => e + ",");

result = result.replace(" ","");
result = result.split(',');

tripleDigitTerms = ["Thousand", "Million", "Billion"]

let mainStr = '';
let len = result.length;

for (let i = 0; i < len; i++) {
    if(i === (len-1)){
        mainStr = mainStr + ` ${result[i]}`;
        continue
    }
    
    mainStr = mainStr + ` ${result[i]} ${tripleDigitTerms[len-i-2]}`;
}

console.log(result);
console.log(mainStr);