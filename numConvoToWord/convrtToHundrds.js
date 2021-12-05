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


// console.log(convrtToHundrds('749'));
// console.log(convrtToHundrds('200'));
// console.log(convrtToHundrds('230'));
// console.log(convrtToHundrds('203'));
// console.log(convrtToHundrds('043'));
// console.log(convrtToHundrds('007'));
// console.log(convrtToHundrds('000'));
// console.log(convrtToHundrds('00'));
// console.log(convrtToHundrds('0'));
export default convrtToHundrds;