
c = 0
s = 'hackerhappy'
t = 'hackerrank'
k = 9
l = len(s)
print(l)
print(s[:l])
print(t[:l])

while s[:l]!=t[:l]:
    l-=1
    c+=1

print("========================")
print(s[:l])
print(t[:l])
print(l)
print(c)


# o = ((len(t)-l)+c)
# if k<o:
#     return "No"
# elif (len(s)+len(t))<=k:
#     return "Yes"
# elif 2*len(t)<k:
#     return "Yes"
# elif k%2 == o%2:
#     return "Yes"
# else:
#     return "No"


# range(10, 0, -1)
# In Python 3, there is no xrange and just range,
# which follows the design of Python 2's xrange
