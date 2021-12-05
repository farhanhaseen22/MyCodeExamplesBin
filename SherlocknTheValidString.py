from collections import Counter
s = 'aabbccddeefghi'
letter_count = Counter(s) 
print(letter_count)

occurenceCount={}
for key,val in letter_count.items():
    if val in occurenceCount:
        occurenceCount[val]+=1
    else:
        occurenceCount[val]=1

print(occurenceCount,end=' ')

if(len(occurenceCount)==1):
    print('YES')
elif(len(occurenceCount)>2):
    print('NO')
# elif 1 in occurenceCount.values() and (occurenceCount[min(occurenceCount.keys())]==1 or (max(occurenceCount.keys()) - min(occurenceCount.keys())==1)):
#         return "YES"
    
#     return 'NO'
else:
    for x in occurenceCount.values():
        if x==1:
            print('YES')
    print('NO')
