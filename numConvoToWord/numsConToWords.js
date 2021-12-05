function convrtToHundrds(num) {

    let nLength = num.length;
    
    if (nLength === 0){
        return "empty string";
    }
    
    single_digits = ["Zero", "One", "Two", "Three", 
    "Four", "Five", "Six", "Seven", "Eight", "Nine"]

    two_digits = ["", "Ten", "Eleven", "Twelve", 
    "Thirteen", "Fourteen", "Fifteen", "Sixteen", 
    "Seventeen", "Eighteen", "Nineteen"]

    tens_multiple = ["", "", "Twenty", "Thirty", "Forty", 
    "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]

    if (nLength === 1){
        return single_digits[Number(num[0])];
    }

    let word = "";
    let x = 0;
    while (x < num.length){
        if (nLength >= 3){
            if (Number(num[x]) !== 0){
                word = word + single_digits[Number(num[x])] + " "
                word = word + "Hundred "
            }
            nLength--;
        }
        else{
            if (Number(num[x]) === 1){
                sum = (Number(num[x]) + Number(num[x+1]));
                word = word + two_digits[sum] + " ";
                return word;
            }
            else if (Number(num[x]) === 2 && Number(num[x + 1]) === 0){
                word = word + "twenty";
                return word;
            }
            else{
                i = Number(num[x]);
                if(i > 0){
                    word = word + tens_multiple[i] + " ";
                }
                // else{
                //     word = word + "ZERO";
                // }
                x += 1
                if(Number(num[x]) !== 0){
                    word = word + single_digits[Number(num[x])];
                }
            }
        }
        // Forwarding loop
        x++;
    }
    return word;
}

function numsConToWords(text) {
    text = text + " ";
    let result = text.replace(/[0-9](?=([0-9]{3})+\D)/g, e => e + ",");
    
    result = result.replace(" ","");
    result = result.split(',');
    
    tripleDigitTerms = ["Thousand", "Million", "Billion", "Trillion"]
    
    let mainStr = '';
    let len = result.length;
    
    for (let i = 0; i < len; i++) {
        let cc = convrtToHundrds(result[i]);
        if(i === (len-1)){
            mainStr = mainStr + ` ${cc}`;
            continue
        }
        mainStr = mainStr + ` ${cc} ${tripleDigitTerms[len-i-2]}`;
    }
    
    return mainStr;
}

// there always need to have space at the end
// let text = "24585456123 ";

console.log(numsConToWords("0564585456123"));
console.log(numsConToWords("564585456123"));
console.log(numsConToWords("24585456123"));
console.log(numsConToWords("3585456123"));

console.log(numsConToWords("542"));
console.log(numsConToWords("1334567891"));