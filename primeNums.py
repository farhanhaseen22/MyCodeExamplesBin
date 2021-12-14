
def first_prime (number_1, number_2) :
    n1=number_1
    n2=number_2
    for x in range(n1, n2):
        
        num = x
        flag = False
        
        if num > 1:
            # check for factors
            for i in range(2, num):
                if (num % i) == 0:
                    # if factor is found, set flag to True
                    flag = True
                    # break out of loop
                    break
        
        # check if flag is True
        if (flag==False):
            print(num, "is a prime number")
            
first_prime(7,15)