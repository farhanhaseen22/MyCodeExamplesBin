# def rotLeft(a, d):
#     d = d%len(a)
#     a = a[d:]+a[:d]
#     return a

# n,d = map(int,input().split())
# a = list(map(int,input().split()))
# print(*rotLeft(a, d))

################################################
# understanding various things of Python
################################################

# x=10
# x+=8
# if(x%2==0):
#     print(x)
# else:
#     print("Nope")

# thisdict =	{
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }

# val="mdel"

# if(thisdict[val] is None):
#     print(thisdict)

try:
    thisdict =	{
        "brand": "Ford",
        "model": "Mustang",
        "year": 1964
    }

    val="mdel"
    
    for k in thisdict.keys():
        if val == k:
            print(thisdict[k])
        else:
            print("Nope")
except:
    print("Something went wrong")

# for key, value in my_dict.items():
#     if val == value:
#         return key
# nyval = not myval
# print(4%5)

################################################

# Left Rotation
# for(var i=d;i<arr.length;i++)
#     arr.unshift(arr.pop());
#     return arr;