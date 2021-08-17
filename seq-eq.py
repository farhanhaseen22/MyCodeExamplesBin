from collections import defaultdict

# n = int(input())
n = 3
# a = list(map(int,input().split()))
a = [4,3,5,1,2]
d1= defaultdict(int)
for x,y in enumerate(a,1):
    d1[x]=y
d2 = {v:k for k,v in d1.items()}

l=[]
for x in sorted(d2.keys()):
    l.append(d2[d2[x]])
print(l)

# print(d1)
# print(d2)
# print(sorted(d1.items(), key=lambda k_v:k_v[1]))

# for x,y in sorted(d1.items(), key=lambda k_v:k_v[1]):
#     print(d2[x])

def solve(year):

    if (year == 1918):
        return '26.09.1918'
    elif ((year <= 1917) & (year%4 == 0)) or ((year%400 == 0) or ((year%4 ==0) & (year%100 != 0))):
        return '12.09.%s' %year
    else:
        return '13.09.%s' %year
