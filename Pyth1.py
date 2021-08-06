
s = 'hackerhappy'
t = 'hackerrank'
k = 9

sameChars=0
length=max(len(s),len(t))
for i in range(length):
    if(s[i]==t[i]):
        sameChars+=1
    else:
        break

print(sameChars)
#     n1=len(s)
#     n2=len(t)
    
    
#     if(k<(n1+n2-2*sameChars)):
#         return "No"
#     elif(k%2==(n1+n2-2*sameChars)%2):
#         return "Yes"
#     elif((n1+n2-k)<0):
#         return "Yes"
#     else:
#         return "No"

# def func1(xy):
#     if(xy[0] == xy[1]):
#         return True
#     else:
#         return False

# word1 = 'frog'
# word2 = 'friend'
# f=list(filter(func1, zip(word1, word2)))
# print(f)
# for i in f:
#     print(i)
# print(max(len(word1),len(word2)))


# import os

# a=1
# b=1

# def func1(n):
#     # print(f"Number: {n}")
#     return f"Number: {n+1}"

# uin = input("Write here: ")
# uin = int(uin)

# val = func1(uin)
# print(val)
