
def convert_to_words(num):

    # Get number of digits
    # in given number
    l = len(num)
 
    # Base cases
    if (l == 0):
        print("empty string")
        return
 
    if (l > 4):
        print("Length more than 4 is not supported")
        return

    single_digits = ["Zero", "One", "Two", "Three", 
    "Four", "Five", "Six", "Seven", "Eight", "Nine"]

    two_digits = ["", "Ten", "Eleven", "Twelve", 
    "Thirteen", "Fourteen", "Fifteen", "Sixteen", 
    "Seventeen", "Eighteen", "Nineteen"]

    tens_multiple = ["", "", "Twenty", "Thirty", "Forty", 
    "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]

 
    tens_power = ["Hundred and", "Thousand and"]
    
    # For single digit number
    if (l == 1):
        print(single_digits[int(num[0])])
        return
 
    # Iterate while num is not '\0'
    word = ""
    x = 0
    while (x < len(num)):

        # print("Value of L:", l)

        # Code path for first 2 digits
        if (l >= 3):
            if (int(num[x]) != 0):
                word = word + single_digits[int(num[x])] + " "
                word = word + tens_power[l - 3] + " "
 
            l -= 1
 
        # Code path for last 2 digits
        else:
 
            # Need to explicitly handle
            # 10-19. Sum of the two digits
            # is used as index of "two_digits"
            # array of strings
            if (int(num[x]) == 1):
                sum = (int(num[x]) +
                       int(num[x+1]))
                word = word + two_digits[sum] + " "
                return
 
            # Need to explicitely handle 20
            elif (int(num[x]) == 2 and
                  int(num[x + 1]) == 0):
                word = word + "twenty"
                return
 
            # Rest of the two digit
            # numbers i.e., 21 to 99
            else:
                i = int(num[x])
                if(i > 0):
                    word = word + tens_multiple[i] + " "
                # else:
                #     word = word + "ZERO"
                x += 1
                if(int(num[x]) != 0):
                    word = word + single_digits[int(num[x])] + " "
        x += 1
        
    # Used for debugging purpose only
    print(num, end=": ")
    print(word)
    

# Driver Code
# convert_to_words("9923")
convert_to_words("749")
convert_to_words("123")
convert_to_words("230")
convert_to_words("200")
convert_to_words("203")
convert_to_words("043")
convert_to_words("007")
# convert_to_words("89")
# convert_to_words("8")


# a = ord('9') - 48
# print(type(a))
# print()
# a = int('9')
# print(type(a))


##################